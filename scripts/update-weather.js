const fs = require("node:fs/promises");

const API_KEY = process.env.OPENWEATHER_API_KEY;
const WEATHER_LATITUDE = 59.3293;
const WEATHER_LONGITUDE = 18.0686;
const WEATHER_CITY = "Stockholm";

if (!API_KEY) {
  throw new Error("Missing OPENWEATHER_API_KEY secret.");
}

function getLocalForecastDate(forecastItem, timezoneOffset) {
  return new Date((forecastItem.dt + timezoneOffset) * 1000);
}

function getDayKey(date) {
  return date.toISOString().slice(0, 10);
}

function getForecastDayKeys(timezoneOffset) {
  const nowInCity = new Date((Date.now() / 1000 + timezoneOffset) * 1000);

  return [0, 1, 2].map(function (dayOffset) {
    const day = new Date(nowInCity);
    day.setUTCDate(nowInCity.getUTCDate() + dayOffset);
    return getDayKey(day);
  });
}

function getShortDate(date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

function chooseMiddayForecast(forecastItems) {
  return forecastItems.reduce(function (bestItem, currentItem) {
    const bestDistance = Math.abs(bestItem.localDate.getUTCHours() - 12);
    const currentDistance = Math.abs(currentItem.localDate.getUTCHours() - 12);

    if (currentDistance < bestDistance) {
      return currentItem;
    }

    return bestItem;
  });
}

function buildThreeDayForecast(forecastData) {
  const timezoneOffset = forecastData.city.timezone;
  const dayKeys = getForecastDayKeys(timezoneOffset);

  return dayKeys.map(function (dayKey, index) {
    const forecastsForDay = forecastData.list
      .map(function (forecastItem) {
        return {
          data: forecastItem,
          localDate: getLocalForecastDate(forecastItem, timezoneOffset),
        };
      })
      .filter(function (forecastItem) {
        return getDayKey(forecastItem.localDate) === dayKey;
      });

    if (forecastsForDay.length === 0) {
      throw new Error(`No forecast data found for ${dayKey}.`);
    }

    const selectedForecast = chooseMiddayForecast(forecastsForDay);
    const weather = selectedForecast.data.weather[0];

    return {
      label: ["Today", "Tomorrow", "Day after"][index],
      date: getShortDate(selectedForecast.localDate),
      temperature: Math.round(selectedForecast.data.main.temp),
      description: weather.description,
      icon: weather.icon,
    };
  });
}

async function updateWeatherFile() {
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/forecast" +
    `?lat=${WEATHER_LATITUDE}` +
    `&lon=${WEATHER_LONGITUDE}` +
    "&units=metric" +
    `&appid=${API_KEY}`;

  const response = await fetch(weatherUrl);

  if (!response.ok) {
    throw new Error(`OpenWeatherMap request failed with status ${response.status}.`);
  }

  const forecastData = await response.json();
  const weatherFile = {
    city: forecastData.city.name || WEATHER_CITY,
    generatedAt: new Date().toISOString(),
    forecasts: buildThreeDayForecast(forecastData),
  };

  await fs.writeFile("weather.json", `${JSON.stringify(weatherFile, null, 2)}\n`);
}

updateWeatherFile();

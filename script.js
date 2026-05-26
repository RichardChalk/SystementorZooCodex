const OPENWEATHER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const WEATHER_LATITUDE = 59.3293;
const WEATHER_LONGITUDE = 18.0686;
const WEATHER_CITY = "Stockholm";

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const weatherStatus = document.querySelector("#weatherStatus");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherSymbol = document.querySelector("#weatherSymbol");
const weatherTemp = document.querySelector("#weatherTemp");
const weatherLocation = document.querySelector("#weatherLocation");
const weatherDescription = document.querySelector("#weatherDescription");

contactForm.addEventListener("submit", function () {
  formStatus.textContent = "Sending your message...";
});

function showWeatherMessage(message) {
  weatherStatus.textContent = message;
}

function updateWeatherCard(weatherData) {
  const temperature = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;

  weatherTemp.innerHTML = `${temperature}&deg;C`;
  weatherLocation.textContent = weatherData.name || WEATHER_CITY;
  weatherDescription.textContent = description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = description;
  weatherIcon.hidden = false;
  weatherSymbol.hidden = true;
  showWeatherMessage("Current conditions from OpenWeatherMap.");
}

async function loadWeather() {
  if (OPENWEATHER_API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
    showWeatherMessage("Add your OpenWeatherMap API key in script.js to show live weather.");
    return;
  }

  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather" +
    `?lat=${WEATHER_LATITUDE}` +
    `&lon=${WEATHER_LONGITUDE}` +
    "&units=metric" +
    `&appid=${OPENWEATHER_API_KEY}`;

  try {
    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const weatherData = await response.json();
    updateWeatherCard(weatherData);
  } catch (error) {
    showWeatherMessage("Weather is unavailable right now. Please check again later.");
  }
}

loadWeather();

const WEATHER_CITY = "Stockholm";

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const weatherStatus = document.querySelector("#weatherStatus");
const forecastCards = document.querySelectorAll(".forecast-card");
const hero = document.querySelector(".hero");

contactForm.addEventListener("submit", function () {
  formStatus.textContent = "Sending your message...";
});

function updateHeroParallax() {
  const canUseParallax = window.matchMedia(
    "(min-width: 821px) and (prefers-reduced-motion: no-preference)"
  ).matches;

  if (!canUseParallax) {
    hero.style.setProperty("--hero-parallax", "0px");
    return;
  }

  const heroTop = Math.min(0, hero.getBoundingClientRect().top);
  const parallaxOffset = Math.max(-35, Math.min(35, heroTop * -0.08));
  hero.style.setProperty("--hero-parallax", `${parallaxOffset}px`);
}

function showWeatherMessage(message) {
  weatherStatus.textContent = message;
}

function updateForecastCards(weatherData) {
  weatherData.forecasts.forEach(function (forecastDay, index) {
    const card = forecastCards[index];

    if (!card) {
      return;
    }

    card.querySelector(".forecast-label").textContent = forecastDay.label;
    card.querySelector(".forecast-date").textContent = forecastDay.date;
    card.querySelector(".forecast-temp").innerHTML = `${forecastDay.temperature}&deg;C`;
    card.querySelector(".forecast-description").textContent = forecastDay.description;

    const icon = card.querySelector(".forecast-icon");
    icon.src = `https://openweathermap.org/img/wn/${forecastDay.icon}@2x.png`;
    icon.alt = forecastDay.description;
    icon.hidden = false;
  });

  showWeatherMessage(`Three-day forecast for ${weatherData.city || WEATHER_CITY}.`);
}

async function loadWeather() {
  try {
    const response = await fetch(`weather.json?v=${Date.now()}`);

    if (!response.ok) {
      throw new Error("Weather file was not found");
    }

    const weatherData = await response.json();
    updateForecastCards(weatherData);
  } catch (error) {
    showWeatherMessage(
      "The forecast is unavailable right now. Please check again later."
    );
  }
}

loadWeather();
updateHeroParallax();
window.addEventListener("scroll", updateHeroParallax);
window.addEventListener("resize", updateHeroParallax);

const WEATHER_CITY = "Stockholm";

const translations = {
  en: {
    languageFlagClass: "flag-sv",
    languageButtonLabel: "Byt till svenska",
    navVisit: "Visit",
    navExperiences: "Experiences",
    navContact: "Contact",
    heroEyebrow: "Open daily for curious explorers",
    heroText:
      "A friendly place for families, school groups, and young animal fans to meet wildlife, ask big questions, and enjoy a day outdoors.",
    heroPrimary: "Plan a Zoo Day",
    heroSecondary: "See Fun Things",
    heroOpenBadge: "Open today 09:00-18:00",
    visitEyebrow: "Your zoo adventure",
    visitTitle: "A happy day full of animal wonders",
    hoursTitle: "When We Are Open",
    hoursText: "Monday to Sunday, 09:00 to 18:00. Last entry is one hour before closing.",
    ticketsTitle: "Tickets for Explorers",
    ticketsText: "Adults from 180 SEK, children from 95 SEK, and guided school visits by request.",
    locationTitle: "Find Your Way",
    locationText: "Green paths, calm rest areas, and clear signs make the park simple to explore.",
    weatherEyebrow: "Zoo weather",
    weatherTitle: "Pack for the next three days",
    weatherLoading: "Forecast loading for Stockholm.",
    weatherReady: "Three-day forecast for Stockholm.",
    weatherUnavailable: "The forecast is unavailable right now. Please check again later.",
    forecastToday: "Today",
    forecastTomorrow: "Tomorrow",
    forecastDayAfter: "Day after",
    loading: "Loading",
    experienceEyebrow: "Animal fun",
    experienceTitle: "Meet, giggle, learn, and explore",
    guidedTag: "Guided Walks",
    keeperTitle: "Keeper Story Time",
    keeperText:
      "Join friendly guides for short stories about animal care, habitats, and conservation projects supported by Systementor Zoo.",
    familiesTag: "Families",
    trailTitle: "Little Explorer Trail",
    trailText:
      "Follow a gentle walking route with activity stations, quiz stops, and plenty of places to pause for snacks or photos.",
    schoolsTag: "Schools",
    schoolTitle: "School Adventure Visits",
    schoolText:
      "Teachers can book age-friendly sessions about ecosystems, biodiversity, and how small choices protect wild places.",
    contactEyebrow: "Say hello",
    contactTitle: "Ask Us About Your Zoo Day",
    contactText:
      "Ask about tickets, group visits, accessibility, or learning programs. We usually reply within one working day.",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    addressLabel: "Address:",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    formEmailLabel: "Email",
    emailPlaceholder: "you@example.com",
    visitTypeLabel: "Visit type",
    chooseOne: "Choose one",
    familyVisit: "Family visit",
    schoolGroup: "School group",
    companyEvent: "Company event",
    otherQuestion: "Other question",
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    sendMessage: "Send Message",
    sending: "Sending your message...",
    formSubject: "New message from Systementor Zoo",
    formAutoresponse:
      "Thank you for contacting Systementor Zoo. We received your message and will reply soon.",
    footerText: "© 2026 Systementor Zoo. Big nature moments for curious minds.",
  },
  sv: {
    languageFlagClass: "flag-en",
    languageButtonLabel: "Switch to English",
    navVisit: "Besök",
    navExperiences: "Upplevelser",
    navContact: "Kontakt",
    heroEyebrow: "Öppet varje dag för nyfikna upptäckare",
    heroText:
      "En vänlig plats för familjer, skolgrupper och unga djurvänner som vill möta djur, ställa stora frågor och njuta av en dag utomhus.",
    heroPrimary: "Planera en zoodag",
    heroSecondary: "Se roliga saker",
    heroOpenBadge: "Öppet idag 09:00-18:00",
    visitEyebrow: "Ditt zooäventyr",
    visitTitle: "En glad dag full av djurens under",
    hoursTitle: "När vi har öppet",
    hoursText: "Måndag till söndag, 09:00 till 18:00. Sista insläpp är en timme före stängning.",
    ticketsTitle: "Biljetter för upptäckare",
    ticketsText: "Vuxna från 180 SEK, barn från 95 SEK och guidade skolbesök på förfrågan.",
    locationTitle: "Hitta rätt",
    locationText: "Gröna stigar, lugna viloplatser och tydliga skyltar gör parken enkel att utforska.",
    weatherEyebrow: "Zooväder",
    weatherTitle: "Packa för de nästa tre dagarna",
    weatherLoading: "Prognosen laddas för Stockholm.",
    weatherReady: "Tredagarsprognos för Stockholm.",
    weatherUnavailable: "Prognosen är inte tillgänglig just nu. Försök igen senare.",
    forecastToday: "Idag",
    forecastTomorrow: "Imorgon",
    forecastDayAfter: "I övermorgon",
    loading: "Laddar",
    experienceEyebrow: "Djurkul",
    experienceTitle: "Möt, skratta, lär och utforska",
    guidedTag: "Guidade turer",
    keeperTitle: "Djurvårdarnas sagostund",
    keeperText:
      "Följ med vänliga guider på korta berättelser om djurvård, livsmiljöer och bevarandeprojekt som stöds av Systementor Zoo.",
    familiesTag: "Familjer",
    trailTitle: "Lilla upptäckarstigen",
    trailText:
      "Följ en lugn promenadslinga med aktivitetsstationer, quizstopp och gott om platser för pauser, snacks och bilder.",
    schoolsTag: "Skolor",
    schoolTitle: "Äventyrsbesök för skolor",
    schoolText:
      "Lärare kan boka åldersanpassade pass om ekosystem, biologisk mångfald och hur små val skyddar vilda platser.",
    contactEyebrow: "Säg hej",
    contactTitle: "Fråga oss om din zoodag",
    contactText:
      "Fråga om biljetter, gruppbesök, tillgänglighet eller lärprogram. Vi svarar oftast inom en arbetsdag.",
    emailLabel: "E-post:",
    phoneLabel: "Telefon:",
    addressLabel: "Adress:",
    nameLabel: "Namn",
    namePlaceholder: "Ditt namn",
    formEmailLabel: "E-post",
    emailPlaceholder: "du@example.com",
    visitTypeLabel: "Typ av besök",
    chooseOne: "Välj ett alternativ",
    familyVisit: "Familjebesök",
    schoolGroup: "Skolgrupp",
    companyEvent: "Företagsevent",
    otherQuestion: "Annan fråga",
    messageLabel: "Meddelande",
    messagePlaceholder: "Hur kan vi hjälpa dig?",
    sendMessage: "Skicka meddelande",
    sending: "Skickar ditt meddelande...",
    formSubject: "Nytt meddelande från Systementor Zoo",
    formAutoresponse:
      "Tack för att du kontaktar Systementor Zoo. Vi har tagit emot ditt meddelande och svarar snart.",
    footerText: "© 2026 Systementor Zoo. Stora naturstunder för nyfikna sinnen.",
  },
};

const weatherDescriptions = {
  sv: {
    "clear sky": "klar himmel",
    "few clouds": "lätta moln",
    "scattered clouds": "spridda moln",
    "broken clouds": "molnigt",
    "overcast clouds": "mulet",
    "light rain": "lätt regn",
    "moderate rain": "måttligt regn",
    "heavy intensity rain": "kraftigt regn",
    "shower rain": "regnskurar",
    thunderstorm: "åska",
    snow: "snö",
    mist: "dimma",
  },
};

const weatherAdvice = {
  en: {
    rain: "Rain boots ready",
    storm: "Indoor talks first",
    snow: "Warm boots today",
    cold: "Bring a hoodie",
    warm: "Great picnic day",
    clear: "Sun hat time",
    clouds: "Great walking day",
    default: "Explorer bag ready",
  },
  sv: {
    rain: "Regnstövlar redo",
    storm: "Inomhus först",
    snow: "Varma skor idag",
    cold: "Ta med hoodie",
    warm: "Perfekt picknickdag",
    clear: "Dags för solhatt",
    clouds: "Bra promenaddag",
    default: "Utforskarväskan redo",
  },
};

const dateWords = {
  sv: {
    Mon: "Mån",
    Tue: "Tis",
    Wed: "Ons",
    Thu: "Tors",
    Fri: "Fre",
    Sat: "Lör",
    Sun: "Sön",
    Jan: "jan",
    Feb: "feb",
    Mar: "mars",
    Apr: "apr",
    May: "maj",
    Jun: "juni",
    Jul: "juli",
    Aug: "aug",
    Sep: "sep",
    Oct: "okt",
    Nov: "nov",
    Dec: "dec",
  },
};

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const weatherStatus = document.querySelector("#weatherStatus");
const forecastCards = document.querySelectorAll(".forecast-card");
const hero = document.querySelector(".hero");
const languageToggle = document.querySelector("#languageToggle");
const languageFlag = document.querySelector("#languageFlag");

let currentLanguage = "en";
let latestWeatherData = null;

contactForm.addEventListener("submit", function () {
  formStatus.textContent = translations[currentLanguage].sending;
});

languageToggle.addEventListener("click", function () {
  setLanguage(currentLanguage === "en" ? "sv" : "en");
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

function showWeatherMessage(messageKey) {
  weatherStatus.textContent = translations[currentLanguage][messageKey];
}

function translateDescription(description) {
  return weatherDescriptions[currentLanguage]?.[description] || description;
}

function getForecastAdvice(forecastDay) {
  const description = forecastDay.description.toLowerCase();
  const advice = weatherAdvice[currentLanguage];

  if (description.includes("rain") || description.includes("drizzle")) {
    return advice.rain;
  }

  if (description.includes("thunder")) {
    return advice.storm;
  }

  if (description.includes("snow")) {
    return advice.snow;
  }

  if (forecastDay.temperature <= 14) {
    return advice.cold;
  }

  if (forecastDay.temperature >= 16) {
    return advice.warm;
  }

  if (description.includes("clear")) {
    return advice.clear;
  }

  if (description.includes("cloud")) {
    return advice.clouds;
  }

  return advice.default;
}

function translateDate(dateText) {
  const words = dateWords[currentLanguage];

  if (!words) {
    return dateText;
  }

  return dateText
    .split(" ")
    .map(function (word) {
      return words[word] || word;
    })
    .join(" ");
}

function applyTranslations() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = dictionary[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });

  document.querySelectorAll("[data-i18n-value]").forEach(function (element) {
    element.value = dictionary[element.dataset.i18nValue];
  });

  languageFlag.className = `language-flag ${dictionary.languageFlagClass}`;
  languageToggle.setAttribute("aria-label", dictionary.languageButtonLabel);
  languageToggle.setAttribute("title", dictionary.languageButtonLabel);

  if (latestWeatherData) {
    updateForecastCards(latestWeatherData);
  } else {
    showWeatherMessage("weatherLoading");
  }
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("systementorZooLanguage", language);
  applyTranslations();
}

function updateForecastCards(weatherData) {
  const forecastLabels = ["forecastToday", "forecastTomorrow", "forecastDayAfter"];

  weatherData.forecasts.forEach(function (forecastDay, index) {
    const card = forecastCards[index];

    if (!card) {
      return;
    }

    const description = translateDescription(forecastDay.description);

    card.querySelector(".forecast-label").textContent =
      translations[currentLanguage][forecastLabels[index]];
    card.querySelector(".forecast-date").textContent = translateDate(forecastDay.date);
    card.querySelector(".forecast-temp").innerHTML = `${forecastDay.temperature}&deg;C`;
    card.querySelector(".forecast-description").textContent = description;
    card.querySelector(".forecast-advice").textContent = getForecastAdvice(forecastDay);

    const icon = card.querySelector(".forecast-icon");
    icon.src = `https://openweathermap.org/img/wn/${forecastDay.icon}@2x.png`;
    icon.alt = description;
    icon.hidden = false;
  });

  showWeatherMessage("weatherReady");
}

async function loadWeather() {
  try {
    const response = await fetch(`weather.json?v=${Date.now()}`);

    if (!response.ok) {
      throw new Error("Weather file was not found");
    }

    latestWeatherData = await response.json();
    updateForecastCards(latestWeatherData);
  } catch (error) {
    showWeatherMessage("weatherUnavailable");
  }
}

setLanguage(localStorage.getItem("systementorZooLanguage") || "en");
loadWeather();
updateHeroParallax();
window.addEventListener("scroll", updateHeroParallax);
window.addEventListener("resize", updateHeroParallax);

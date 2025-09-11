// ==============================
// CONFIGURATION & API SETTINGS
// ==============================

const API_KEY = "271af702b137689bc26a09bdb19cd39f";

// ==============================
// DOM ELEMENT CACHE
// ==============================

const cityinput = document.querySelector('#city');
const searchbtn = document.querySelector('#searchbtn');
const errordiv = document.querySelector('#error');
const weatherInfo = document.querySelector('#weather');
const cityName = document.querySelector('#cityname');
const condition = document.querySelector('#condition');
const temperature = document.querySelector('#temperature');
const windspeed = document.querySelector('#windspeed');
const humidity = document.querySelector('#humidity');

// ==============================
// EVENT HANDLERS
// ==============================

searchbtn.addEventListener("click", fetchWeather);
cityinput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    fetchWeather();
  }
});

// ==============================
// WEATHER FETCH FUNCTIONALITY
// ==============================

async function fetchWeather() {
  const city = cityinput.value.trim();

  if (!city) {
    displayError("⚠️ Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    displayError("❌ City not found or network error.");
    console.error("Weather API Error:", error);
  }
}

// ==============================
// DISPLAY WEATHER FUNCTION
// ==============================

function displayWeather(data) {
  errordiv.style.display = "none";
  weatherInfo.classList.remove("hidden");


  cityName.textContent = data.name;
  const cloudiness = data.clouds.all;
  const hum = data.main.humidity;
  const wind = data.wind.speed;
  const windKMH = (wind * 3.6).toFixed(1);


  let iconClass = "fa-cloud-sun";
  let iconColor = "#ff9800";
  let cloudText = "Clear Sky";

  const isOvercast = cloudiness >= 85 && hum >= 60 && windKMH >= 10;



  if (isOvercast) {
    iconClass = "fa-cloud";
    iconColor = "#616161";
    cloudText = "Overcast";
  } else if (cloudiness < 10) {
    iconClass = "fa-sun";
    iconColor = "#fdd835";
    cloudText = "Clear Sky";
  } else if (cloudiness < 30) {
    iconClass = "fa-cloud-sun";
    iconColor = "#ffd54f";
    cloudText = "Few Clouds";
  } else if (cloudiness < 50) {
    iconClass = "fa-cloud-sun";
    iconColor = "#90caf9";
    cloudText = "Scattered Clouds";
  } else if (cloudiness < 85) {
    iconClass = "fa-cloud";
    iconColor = "#90a4ae";
    cloudText = "Broken Clouds";
  }

  // const fixedTextColor = "#ff9800";
  const fixedTextColor = " #8cd418ff;";
  condition.innerHTML = `
    <span id="icon-wrapper">
      <i id="weather-icon" class="fa-solid ${iconClass}" style="color: ${iconColor};"></i>
    </span>
    <span id="weather-text" style="color: ${fixedTextColor};">${cloudText}</span>
  `;



  // ========================
  // TEMPERATURE COLOR LOGIC
  // ========================
  const temp = data.main.temp;
  let tempColor = "#fff";
  if (temp < 10) tempColor = "#00BCD4";
  else if (temp < 20) tempColor = "#4FC3F7";
  else if (temp < 30) tempColor = "#81C784";
  else if (temp < 40) tempColor = "#FFB74D";
  else if (temp < 50) tempColor = "#F44336";
  else tempColor = "#6A1B9A";

  // ========================
  // WIND SPEED COLOR LOGIC
  // ========================
  let windColor = "#fff";
  if (windKMH < 10) windColor = "#AED581";
  else if (windKMH < 20) windColor = "#81C784";
  else if (windKMH < 35) windColor = "#FFA726";
  else if (windKMH < 60) windColor = "#EF5350";
  else windColor = "#8E24AA";

  // ========================
  // HUMIDITY COLOR LOGIC
  // ========================
  let humColor = "#fff";
  if (hum < 30) humColor = "#4FC3F7";
  else if (hum < 60) humColor = "#81C784";
  else if (hum < 80) humColor = "#FFB74D";
  else humColor = "#E53935";

  // ========================
  // DISPLAY FINAL VALUES
  // ========================
  temperature.innerHTML = `
    <i class="fa-solid fa-temperature-half" style="color: ${tempColor};"></i> 
    <span style="color: ${tempColor};">Temperature: ${temp}°C</span>
  `;
  windspeed.innerHTML = `
    <i class="fa-solid fa-wind" style="color: ${windColor};"></i> 
    <span style="color: ${windColor};">Wind Speed: ${windKMH} km/h</span>
  `;
  humidity.innerHTML = `
    <i class="fa-solid fa-droplet" style="color: ${humColor};"></i> 
    <span style="color: ${humColor};">Humidity: ${hum}%</span>
  `;
}

// ==============================
// DISPLAY ERROR FUNCTION
// ==============================

function displayError(message) {
  errordiv.textContent = message;
  errordiv.style.display = "block";
  weatherInfo.classList.add("hidden");
}

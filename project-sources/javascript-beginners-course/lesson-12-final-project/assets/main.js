// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

// Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = searchInput.value;
  fetchCurrentWeather(city);
});

async function fetchCurrentWeather(city) {
  try {
    const response = await fetch(
      `${apiUrl}weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    if (!response.ok) throw new Error("Weather data not found.");
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error("Error fetching current weather:", error);
    // Implement user-friendly error handling
  }
}

function displayCurrentWeather(data) {
  const weatherSection = document.getElementById("currentWeather");
  // Clear previous content
  weatherSection.innerHTML = `<h2>Current Weather</h2>`;
  // Add new content
  weatherSection.innerHTML += `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed}m/s</p>
        <p>Weather: ${data.weather[0].main}</p>
    `;
}

// Fetch the 5-day forecast
async function fetchForecast(city) {
  try {
    const response = await fetch(
      `${apiUrl}forecast?q=${city}&appid=${apiKey}&units=metric`,
    );
    if (!response.ok) throw new Error("Forecast data not found.");
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error("Error fetching forecast:", error);
    // Implement user-friendly error handling
  }
}

// Display the 5-day forecast
function displayForecast(data) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = ""; // Clear previous forecasts

  // Filter data by noon to reduce the number of displayed forecasts
  const dailyData = data.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00"),
  );

  dailyData.forEach((day) => {
    const date = new Date(day.dt_txt).toDateString();
    forecastContainer.innerHTML += `
            <div class="forecast-item">
                <h3>${date}</h3>
                <p>Temp: ${day.main.temp}°C</p>
                <p>Weather: ${day.weather[0].main}</p>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
            </div>
        `;
  });
}

// Store and retrieve recent searches from localStorage
function saveSearch(city) {
  let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  if (!searches.includes(city)) {
    searches.push(city);
    if (searches.length > 5) searches.shift(); // Keep only the last 5 searches
    localStorage.setItem("recentSearches", JSON.stringify(searches));
    displayRecentSearches();
  }
}

function displayRecentSearches() {
  const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  const recentSearchesDiv = document.getElementById("recentSearches");
  recentSearchesDiv.innerHTML = "<h3>Recent Searches</h3>";
  searches.forEach((city) => {
    recentSearchesDiv.innerHTML += `<button class="recent-search-btn">${city}</button>`;
  });

  // Add click event to each button
  document.querySelectorAll(".recent-search-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const city = e.target.textContent;
      fetchCurrentWeather(city);
      fetchForecast(city);
    });
  });
}

// Enhance the search button event listener to include forecast fetching and saving searches
searchBtn.addEventListener("click", () => {
  const city = searchInput.value;
  fetchCurrentWeather(city);
  fetchForecast(city);
  saveSearch(city);
});

// Call displayRecentSearches on page load to show any stored searches
document.addEventListener("DOMContentLoaded", displayRecentSearches);

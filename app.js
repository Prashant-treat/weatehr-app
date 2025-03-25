const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const aqiElement = document.getElementById('aqi');
const weatherInfo = document.getElementById('weather-info');
const darkModeBtn = document.getElementById('dark-mode-btn');

const apiKey = '5dcc7d31495bed37fc405f7a83c986e6'; // OpenWeatherMap API Key for weather data
const aqiApiKey = '5dcc7d31495bed37fc405f7a83c986e6';  // Air Pollution API Key for AQI
const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY'; // Unsplash API Key

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city !== '') {
    getWeather(city);
    getAQI(city);
    setBackgroundImage(city);
  }
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.weather-container').classList.toggle('dark-mode');
  darkModeBtn.classList.toggle('dark-mode');
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        cityName.innerText = data.name;
        temp.innerText = `Temperature: ${data.main.temp}°C`;
        description.innerText = `Condition: ${data.weather[0].description}`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.style.display = 'block';
      } else {
        alert('City not found!');
      }
    })
    .catch(error => alert('Error fetching weather data!'));
}

function getAQI(city) {
  // Example for AQI fetch based on city coordinates
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=lat_value&lon=lon_value&appid=${aqiApiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const aqi = data.list[0].main.aqi;
        let aqiDescription = '';

        switch (aqi) {
          case 1:
            aqiDescription = 'Good';
            break;
          case 2:
            aqiDescription = 'Fair';
            break;
          case 3:
            aqiDescription = 'Moderate';
            break;
          case 4:
            aqiDescription = 'Poor';
            break;
          case 5:
            aqiDescription = 'Very Poor';
            break;
        }

        aqiElement.innerText = `Air Quality Index (AQI): ${aqiDescription}`;
      } else {
        aqiElement.innerText = 'AQI data unavailable';
      }
    })
    .catch(error => aqiElement.innerText = 'Error fetching AQI data!');
}

// Set background image dynamically based on city
function setBackgroundImage(city) {
  const url = `https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashApiKey}&count=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data[0]) {
        const imageUrl = data[0].urls.regular;  // Get the image URL from Unsplash
        document.body.style.backgroundImage = `url(${imageUrl})`;
      } else {
        console.log('No image found for this city');
      }
    })
    .catch(error => {
      console.error('Error fetching background image:', error);
      document.body.style.backgroundImage = 'url(default_image_url_here)';  // Fallback image
    });
}



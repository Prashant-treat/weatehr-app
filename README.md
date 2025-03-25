# Weather App

A simple weather application that fetches real-time weather data from the OpenWeatherMap API. The app provides a clean and user-friendly interface with both light and dark modes.

## Features

- Display current weather for any city.
- Toggle between light and dark modes.
- Show temperature, weather condition, humidity, wind speed, and more.
- Get weather updates from OpenWeatherMap API.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Setup Instructions

Follow these steps to get the app running locally:

### 1. Clone this repository:

### 2. Get an API Key from OpenWeatherMap:
Go to OpenWeatherMap API.

Sign up and get your free API key.

### 3. Set up the API key:
Open the app.js file.

Replace YOUR_API_KEY_HERE with your actual OpenWeatherMap API key.

javascript
Copy
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
### 4. Open the app:
Open index.html in your browser.

### Enjoy the weather app!

### How it Works
The user enters a city name in the input field.

The app fetches weather data from OpenWeatherMap API using the city name.

The data is displayed, including temperature, humidity, wind speed, etc.

The user can toggle between light and dark mode.

### Dark Mode Toggle
The app provides an option to switch between light and dark themes.

The dark mode will persist even after refreshing the page, thanks to the use of localStorage.

### Example of usage
Enter a city name (e.g., "London") and hit "Get Weather" to fetch the weather details for that city.

### Files in the repository
index.html - The HTML structure of the weather app.

style.css - The CSS file to style the app, including light and dark mode styles.

app.js - The JavaScript file that handles the logic and API calls.

README.md - This file with setup and instructions.

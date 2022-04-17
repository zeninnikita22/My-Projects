const city = document.querySelector("#city");
const country = document.querySelector("#country");
const temperature = document.querySelector(".number-degree");
const temperatureSymbol = document.querySelector(".symbol-degree");
const description = document.querySelector(".box__weather-lower");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const visibility = document.querySelector("#visibility");
const celciusButton = document.querySelector("#celsius");
const farenheitButton = document.querySelector("#farenheit");
const symbolDegree = document.querySelector(".symbol-degree");
const weatherImg = document.querySelector("#weather-img");

const testlat = 24.70564380892621;
const testlong = 46.66989985563408;

let now = new Date();
let hours = now.getHours();

let getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      resolve({ latitude: lat, longitude: long });
    });
  } else {
    reject("your browser doesn't support geolocation API");
  }
});

getLocationPromise
  .then((location) => {
    const testurl = `https://api.openweathermap.org/data/2.5/weather?lat=${testlat}&lon=${testlong}&appid=4095bb9d0a0f70a3435db12ecf8d5d1c`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4095bb9d0a0f70a3435db12ecf8d5d1c`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        displayData(data);
        celciusButton.addEventListener("click", function () {
          temperature.innerHTML = Math.floor(data.main.temp - 273.15);
          symbolDegree.innerHTML = "°C";
        });
        farenheitButton.addEventListener("click", function () {
          temperature.innerHTML = Math.floor(
            (data.main.temp - 273.15) * 1.8 + 32
          );
          symbolDegree.innerHTML = "°F";
        });
      });

    function displayData(data) {
      city.innerHTML = data.name;
      if (data.sys.country === undefined) {
        country.innerHTML = "";
      } else {
        country.innerHTML = ", " + data.sys.country;
      }

      temperature.innerHTML = Math.floor(data.main.temp - 273.15);
      wind.innerHTML = data.wind.speed + " km/hour";
      humidity.innerHTML = data.main.humidity + " %";
      pressure.innerHTML = data.main.pressure + " hPa";
      visibility.innerHTML = data.visibility + " m";
      description.innerHTML = data.weather[0].description;

      if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
        weatherImg.setAttribute("src", "weather/thunderstorm.png");
      } else if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
        weatherImg.setAttribute("src", "weather/drizzle.png");
      } else if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
        weatherImg.setAttribute("src", "weather/rain.png");
      } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
        weatherImg.setAttribute("src", "weather/snow.png");
      } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
        weatherImg.setAttribute("src", "weather/fog.png");
      } else if (data.weather[0].id === 800 && hours > 6 && hours < 21) {
        weatherImg.setAttribute("src", "weather/sun.png");
      } else if (data.weather[0].id === 800 && (hours > 21 || hours < 6)) {
        weatherImg.setAttribute("src", "weather/moon.png");
      } else {
        weatherImg.setAttribute("src", "weather/cloud.png");
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });

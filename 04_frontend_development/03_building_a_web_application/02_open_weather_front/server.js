const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");
const fetch = require("node-fetch");
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const GOOGLE_PLACES_API_KEY=process.env.GOOGLE_PLACES_API_KEY;


// "/categories" -> return all categories
app.get("/weather/:place", function(request, result) {
  const address = request.params.place;
  weatherAt(address,result);
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});


// make a function that will give us the temperature from a vague string.
// Something like that: temperatureAt("Decathlon Campus"); // Displays 17 ˚C.
// The goal is to use only one chain of Promise to first get the coordinates from Google Places Web Service
// and then pass the coordinates to the previous function weatherByLatitudeAndLongitude and then display the temperature.


function fetchLocationByAdress(address) {

  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_PLACES_API_KEY}`,
    {
      method: "GET",
      headers: {"Accept": "application/json"}
    })
    .then((result) => {
      const locationObject=result.json();
      return locationObject;
    })
    .then((locationObject) => {
      const location = {
        longitude : locationObject.results[0].geometry.location.lng,
        latitude : locationObject.results[0].geometry.location.lat
      };
      console.log(location);
      return location;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchWeatherByLocation(location) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=${OPENWEATHER_API_KEY}`,
    {
      method: "GET",
      headers: {"Accept": "application/json"}
    })
    .then((result) => {
      const weather=result.json();
      return weather;
    })
    .then((weather) => {
      return weather.list.map(forecast => reformatForecast(forecast,weather.city.name));
    })
    .then((weatherList) => {
      return filterTomorrowWeather(weatherList);
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}


function filterTomorrowWeather(weatherList) {
  return weatherList.filter(weather => weather.date.substr(0,10)===getTomorrowDate());
}

function getTomorrowDate() {
  const currentDate = new Date();
  const day = currentDate.getDate() +1;
  const formattedDate=`${day}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  return formattedDate;
}

function reformatForecast(forecast,city) {
  return {
    city: city,
    date: timestampToDate(forecast.dt),
    temperature: forecast.main.temp,
    weather: {
      id: forecast.weather[0].id,
      main: forecast.weather[0].main,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon
    }
  };
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const formattedDate=`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${getFullHours(date.getHours())}:${getFullMinutes(date.getMinutes())}`;
  return formattedDate;
}

function getFullMinutes(minutes) {
  if (minutes < 10) {
    return "0" + minutes;
  } else {
    return minutes;
  }
}

function getFullHours(hours) {
  if (hours < 10) {
    return "0" + hours;
  } else {
    return hours;
  }
}

function weatherAt(address, result) {

  return fetchLocationByAdress(address)
    .then((location) => {
      return fetchWeatherByLocation(location);
    })
    .then((weatherList) => {
      console.log(weatherList);
      return weatherList;
    })
    .then((weatherList) => {
      return convertWeatherToHtml(weatherList);
    })
    .then((htmlString) => {
      result.send(htmlString);
      return htmlString;
    })
    .then((htmlString) => {
      console.log(htmlString);
      return htmlString;
    })
    .catch((error) => {
      console.warn(error);
      result.send(error);
    });
}


function convertWeatherToHtml(weatherList) {
  const city=weatherList[0].city;
  const beginningOfHtml = `<!DOCTYPE html>`+
    `<html>`+
    `<head>`+
    `<meta charset="utf-8" />`+
      `<link rel="stylesheet"`+
        `href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"`+
        `integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"`+
        `crossorigin="anonymous"`+
      `/></head><body>`+
      `<div class="container">`+
      `<div class="row  pb-5" text-center><h1> Tomorrow's weather in ${city}</h1></div>`+
      `<div class="row">`;


  let htmlString = weatherList.map(weather => {
    return `<div class="col card">`+
      `<img class="card-img-top" src='http://openweathermap.org/img/w/${weather.weather.icon}.png' alt="Card image cap">`+
      `<div class="card-body">`+
      `<h4 class="card-title">${weather.date.substr(13,5)}</h4>`+
      `<p class="card-text">Temp: ${weather.temperature}°C</p>`+
      `<p class="card-text">${weather.weather.description}</p>`+
      `</div>`+
      `</div>`;
  }).join("");


  htmlString = beginningOfHtml+htmlString+"</div></div></body>";

  console.log(htmlString);

  return htmlString;
}

module.exports = {
  fetchLocationByAdress:fetchLocationByAdress,
  fetchWeatherByLocation:fetchWeatherByLocation,
  weatherAt:weatherAt
};

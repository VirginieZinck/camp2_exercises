const fetch = require("node-fetch");
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const GOOGLE_PLACES_API_KEY=process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

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
      console.log("location object after fetch",location);
      return location;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchWeatherByLocation(location) {

  console.log(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=${OPENWEATHER_API_KEY}`);

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
    .then((weatherList) => {
      console.log("weather list:",weatherList);
      return weatherList;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}


function filterTomorrowWeather(weatherList) {
  return weatherList.filter((weather) => weather.date.substr(0,weather.date.indexOf(" "))===getTomorrowDate());
}

function getTomorrowDate() {
  const currentDate = new Date();
  const day = currentDate.getDate() +1;
  const formattedDate=`${day}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  console.log("Tomorrow's Date", formattedDate);
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

function weatherAt(address) {

  return fetchLocationByAdress(address)
    .then((location) => {
      console.log("location after fetch",location);
      return location;
    })
    .then((location) => {
      return fetchWeatherByLocation(location);
    })
    .then((weatherList) => {
      console.log("weatherList after fetch",weatherList);
      return weatherList;
    })
    .catch((error) => {
      console.warn(error);
    });
}

module.exports = {
  weatherAt:weatherAt
};

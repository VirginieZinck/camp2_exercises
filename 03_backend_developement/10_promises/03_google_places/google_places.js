const fetch = require("node-fetch");
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const GOOGLE_PLACES_API_KEY=process.env.GOOGLE_PLACES_API_KEY;

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
      return location;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchWeatherByLocation(location) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=${OPENWEATHER_API_KEY}`,
    {
      method: "GET",
      headers: {"Accept": "application/json"}
    })
    .then((result) => {
      const weather=result.json();
      return weather;
    })
    .then((weather) => {
      const weatherTemp = `${weather.main.temp} °C`;
      return weatherTemp;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function temperatureAt(address) {

  return fetchLocationByAdress(address)
    .then((location) => {
      return fetchWeatherByLocation(location);
    })
    .then((weatherTemp) => {
      console.log(`The temp in ${address} is: ${weatherTemp}`);
      return weatherTemp;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}


temperatureAt("Décathlon campus");

temperatureAt("Surf camp honolulu");

temperatureAt("peniche - portugal");


module.exports = {
  fetchLocationByAdress:fetchLocationByAdress,
  fetchWeatherByLocation:fetchWeatherByLocation,
  temperatureAt:temperatureAt
};

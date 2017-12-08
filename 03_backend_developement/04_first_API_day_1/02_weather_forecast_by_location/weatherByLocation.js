const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(latitude, longitude, callback) {
  fetchForecastsByLatitudeAndLongitude(latitude, longitude, function(forecastObject) {
    //console.log(forecastObject);
    callback(forecastObject.list.map(reformatForecast),forecastObject.city.name);
  });
}

function fetchForecastsByLatitudeAndLongitude(latitude, longitude, callback) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const forecastObject = JSON.parse(result);
      console.log(forecastObject.city.name);

      callback(forecastObject);
    }
  );
}

function reformatForecast(forecast) {
  return {
    //city: forecast.city.name,
    date: timestampToDate(forecast.dt),
    temperature: forecast.main.temp,
    weather: {
      id: forecast.weather[0].id,
      main: forecast.weather[0].main,
      description: forecast.weather[0].description
    }
  };
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// weatherByLatitudeAndLongitude(35, 139, function(forecasts) {
//   console.log(forecasts);
// });

module.exports = {
  reformatForecast: reformatForecast,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
};

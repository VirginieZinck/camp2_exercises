const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;

//Recode the function weatherByCityName getting a city as input and return the temperature from Open Weather
function weatherByCityName(city) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
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
      console.log(`This is weather temp in ${city}: ${weatherTemp}`);
      return weatherTemp;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

// weatherByCityName("London");
// weatherByCityName("Bruxelles");
// weatherByCityName("Lille");


//Recode the function weatherByLatitudeAndLongitude that accept an input like 32.661343, 51.680374
function weatherByLatitudeAndLongitude(latitude, longitude) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
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
      console.log(weatherList);
      return weatherList;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

//weatherByLatitudeAndLongitude("32.661343","51.680374");

function reformatForecast(forecast,city) {
  return {
    city: city,
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
module.exports = {
  weatherByCityName:weatherByCityName,
  fetch:fetch,
  weatherByLatitudeAndLongitude:weatherByLatitudeAndLongitude,
  timestampToDate:timestampToDate
};

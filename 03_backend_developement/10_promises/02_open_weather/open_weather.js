//Recode the function weatherByCityName getting a city as input and return the temperature from Open Weather

const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;


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

weatherByCityName("London");
weatherByCityName("Bruxelles");
weatherByCityName("Lille");

module.exports = {
  weatherByCityName:weatherByCityName,
  fetch:fetch
};

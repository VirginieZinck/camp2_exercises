const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;


function weatherByCityName(city) {

  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    },
    function(error, response, result) {
    //  console.log("error:", error); // Print the error if one occurred
    //  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      const weather=JSON.parse(result);
      const weatherTemp = `${weather.main.temp} °C`;
      console.log("this is weather temp in callback"+weatherTemp);
      return weatherTemp;
    }
  );
}

//console.log(weatherByCityName("London"));

module.exports = weatherByCityName;

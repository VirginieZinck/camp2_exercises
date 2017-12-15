const open_weather = require("../open_weather");
const API_KEY = process.env.OPENWEATHER_API_KEY;
require("sepia");

// 1. Let's get a product with its id: efe288cb-fb63-4b23-b8df-529f04b8b02b.
// Start by ending your request by displaying the JavaScript resulting.
// 2. On the same chain of promises, get the title of the brand of this product


test("it should fetch the temp of a given city", (done) => {
  expect.assertions(1);
  const city = "London";
  return open_weather.weatherByCityName(city)
    .then (weatherTemp => {
      expect(weatherTemp).toEqual("-7 °C");
      done();
    });
});


test("it should handle errors when fetching a product or its brand", () => {
  const city = "London";
  return fetch_dkt_api.fetchProductAndBrand(productId)
    .then (error => {
      expect(error.name).toEqual("FetchError");
    });
});

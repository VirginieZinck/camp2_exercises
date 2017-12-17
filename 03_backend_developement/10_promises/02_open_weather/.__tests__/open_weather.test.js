const open_weather = require("../open_weather");
require("sepia");

test("it should fetch the temp of a given city", (done) => {
  expect.assertions(1);
  const city = "London";
  return open_weather.weatherByCityName(city)
    .then (weatherTemp => {
      expect(weatherTemp).toEqual("4.81 °C");
      done();
    });
});

test("it should handle errors when fetching a product or its brand", () => {
  const city = "123/London";
  return open_weather.weatherByCityName(city)
    .then (error => {
      expect(error.name).toEqual("TypeError");
    });
});

test("it should fetch the weather for the correct city when given location", (done) => {
  expect.assertions(1);
  return open_weather.weatherByLatitudeAndLongitude("32.661343","51.680374")
    .then (weatherList => {
      expect(weatherList[0].city).toEqual("Esfahan");
      done();
    });
});

test("it should handle errors when given incorrect location", (done) => {
  expect.assertions(1);
  return open_weather.weatherByLatitudeAndLongitude("abc","abc")
    .then (error => {
      expect(error.name).toEqual("TypeError");
      done();
    });
});

test("it should format date correctly with leading zeros on time", (done) => {
  expect.assertions(1);
  const formattedDate = open_weather.timestampToDate(1513825200);
  expect(formattedDate).toEqual("21/12/2017 - 04:00");
  done();
});

test("it should format date correctly without leading zeros on time", (done) => {
  expect.assertions(1);
  const formattedDate = open_weather.timestampToDate(1514825200);
  expect(formattedDate).toEqual("1/1/2018 - 17:46");
  done();
});

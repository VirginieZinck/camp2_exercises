const google_places = require("../google_places");
require("sepia");


test("it should fetch a location for a given address", (done) => {
  expect.assertions(1);
  const address = "Decathlon campus";
  return google_places.fetchLocationByAdress(address)
    .then (location => {
      expect(location).toEqual({longitude:3.142559,latitude:50.645741});
      done();
    });
});


test("it should handle errors when fetching a location", () => {
  const address = "";
  return google_places.fetchLocationByAdress(address)
    .then (error => {
      expect(error.name).toEqual("TypeError");
    });
});


test("it should fetch a temperature for a given location", (done) => {
  expect.assertions(1);
  const location = {longitude:3.142559,latitude:50.645741};
  return google_places.fetchWeatherByLocation(location)
    .then (weatherTemp => {
      expect(weatherTemp).toEqual("2.1 °C");
      done();
    });
});


test("it should handle errors when fetching a temperature", () => {
  const location = {longitude:"abc",latitude:"vfe"};
  return google_places.fetchWeatherByLocation(location)
    .then (error => {
      expect(error.name).toEqual("TypeError");
    });
});


test("it should return a temperature for a given address", (done) => {
  expect.assertions(1);
  const address = "Surf camp Honolulu";
  return google_places.temperatureAt(address)
    .then (weatherTemp => {
      expect(weatherTemp).toEqual("21.32 °C");
      done();
    });
});

test("it should handle errors when given an incorrect address", () => {
  const address = "";
  return google_places.temperatureAt(address)
    .then (error => {
      expect(error.name).toEqual("TypeError");
    });
});

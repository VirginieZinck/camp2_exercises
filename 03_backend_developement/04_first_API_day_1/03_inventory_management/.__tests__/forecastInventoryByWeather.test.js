jest.mock('./__mocks__/request');

const forecastInventoryByWeather = require('../forecastInventoryByWeather');

describe('#forecastInventoryByWeather()', () => {
  it('should load weather data for 16 days', async () => {
    const secondPromise = await forecastInventoryByWeather([
      "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille"
    ]);
    const forecast = await secondPromise[0];

    expect(forecast).toBe('You need to buy some parkas for the store in Marseille');
  });
});


const weather = require("./weatherByLocation");

const dummyForecast = {
  "dt": 1513090800,
  "main": {
    "temp": 9.53,
    "temp_min": 9.53,
    "temp_max": 9.53,
    "pressure": 1016.86,
    "sea_level": 1026.45,
    "grnd_level": 1016.86,
    "humidity": 100,
    "temp_kf": 0
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 14.21,
    "deg": 265.001
  },
  "rain": {},
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2017-12-12 15:00:00"
};

test("should reformat a forecast properly", function() {
  expect(weather.reformatForecast(dummyForecast)).toEqual({
    date: "12/12/2017",
    temperature: 9.53,
    weather: {
      "id": 800,
      "main": "Clear",
      "description":"clear sky"
    }
  });
});

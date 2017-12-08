const request = require("request");
const weatherByLocation = require("../02_weather_forecast_by_location/weatherByLocation");

const GOOGLE_PLACES_API_KEY=process.env.GOOGLE_PLACES_API_KEY;

const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];


//Google Places API Web Service
function forecastInventoryByWeather(stores) {
  const locationArray = stores.map(convertAddressInLocation);
  return locationArray;

}

function convertAddressInLocation(address) {
  fetchLocationByAddress(address, weatherByLocation.weatherByLatitudeAndLongitude);
}


function fetchLocationByAddress(address,callback) {

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_PLACES_API_KEY}`,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    },
    function(error, response, result) {
      const resultObject=JSON.parse(result);
      console.log(`google API for address ${resultObject.results[0].formatted_address}, location ${resultObject.results[0].geometry.location.lng}&${resultObject.results[0].geometry.location.lat}`);
      const longitude=resultObject.results[0].geometry.location.lng;
      const latitude=resultObject.results[0].geometry.location.lat;
      callback(latitude, longitude, convertWeatherInOrderNeeds);

    });
}

function convertWeatherInOrderNeeds(forecastArray, city) {
  const nbForecast=forecastArray.length;
  const nbRainyForecast=forecastArray.filter(object => object.weather.main==="Rain").length;

  console.log("city:" + city + " - nb of Forecast : "+nbForecast+" - including nb of rainy forecast"+nbRainyForecast);
}

forecastInventoryByWeather(stores);

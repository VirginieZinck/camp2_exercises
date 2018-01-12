import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fetchLocationByAdress } from "./openWeather";

const fetch = require("node-fetch");

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("fetchLocationByAdress: real API call", () => {

  const expectedResult = {
    latitude: 45.764043,
    longitude: 4.835659
  };

  return fetchLocationByAdress(fetch,"Lyon")
    .then(location => {
      expect(location).toEqual(expectedResult);
    })
});

function fakeFetch() {
  return Promise.resolve({
    json: function() {
      return Promise.resolve({
        results:[{
          geometry:{
            location:{
              lng:4.835659,
              lat:45.764043
            }
          }
        }],
        status: "OK"
      });
    }
  });
}


test("fetchLocationByAdress: fake API call", () => {

  const expectedResult = {
    latitude: 45.764043,
    longitude: 4.835659
  };

  return fetchLocationByAdress(fakeFetch,"Lyon")
    .then(location => {
      expect(location).toEqual(expectedResult);
    })
});

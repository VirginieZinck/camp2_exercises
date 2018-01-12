import React, { Component } from 'react';


function Weather(props) {
  console.log("props",props);

  if (props.list.length>0) {
  return props.list.map(item => {
      return (
        <div className="col-4 col-sm-3 col-md">
          <div className="card border-dark mb-4">
            <img
              className="card-img-top"
              src={`http://openweathermap.org/img/w/${item.weather.icon}.png`}
              alt="Card image cap"
            />
            <div className="card-body">
              <p
                className="card-title">
                  {item.date.substr(item.date.lastIndexOf(" "),item.date.length-1)}
              </p>
              <p className="card-text">
                {item.temperature}°C
              </p>
              <p className="card-text">
                {item.weather.description}
              </p>
            </div>
          </div>
        </div>
      )
    });
  } else {
    return null;
  }
}

export default Weather;

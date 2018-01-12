import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddressForm from './AddressForm';
import openWeather from './openWeather';
import Weather from './Weather';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      address:"",
      weatherList:[]
    };
  }

  getWeather = (address) => {
    this.setState(
      {address:address},
      ()=>{console.log(this.state)}
    );

    return openWeather.weatherAt(address)
    .then((weatherList) => {
      this.setState({weatherList:weatherList})
    })
    .then((weatherList) => {
      console.log("weatherList in State", this.state.weatherList[0])
    })
  }


  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid" background="weather.jpg">
          <h1 className="App-title pt-5">Weather forecast for tomorrow</h1>
          <AddressForm onSubmit={this.getWeather}/>
        </div>
        <div className="row justify-content-center mx-auto pt-3">
          <Weather list={this.state.weatherList}/>
        </div>
      </div>
    );
  }
}

export default App;

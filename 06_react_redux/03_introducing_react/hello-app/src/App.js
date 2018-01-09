import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    )
  }
}

function Hello2(props) {
  return (
    <h1> Hello2, {props.name} </h1>
  );
}

function Hello3(name) {
  return (
    <h1> Hello3, {name}</h1>
  );
}

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {counter: 0}
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <Hello name="Virginie"/>
          <Hello2 name="Virginie"/>
          {Hello3("Virginie")}

        </header>
      </div>
    );
  }



}

export default App;

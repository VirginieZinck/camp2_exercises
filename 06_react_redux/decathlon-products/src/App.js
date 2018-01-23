import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {nav, Route, Link, withRouter} from 'react-router-dom';
import Categories from './Categories';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/categories">Categories</Link>
        </nav>
        <div>
          <Route path="/categories" component={Categories}/>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));

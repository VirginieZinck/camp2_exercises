import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Chat from "./Chat";
import { connect } from "react-redux";
import { init } from "./websocket"

class App extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>

        {this.props.userName
          ? (<Chat />
          )
          : (<Login />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App);

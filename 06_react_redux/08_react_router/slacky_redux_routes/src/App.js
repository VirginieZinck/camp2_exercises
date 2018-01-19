import React, { Component } from "react";
import "./App.css";
import ConnectedChat from "./Chat";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class App extends Component {

  componentDidMount() {
    // Listen for messages
    this.props.websocket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      console.log("Message from server ", message);
      switch (message.type) {
        case "CONNECTION_START":
        default:
          return;
        case "MESSAGES":
          // this.setState({ messages: message.data });
          this.props.updateMessages(message.data);
          return;
      }
    });
  }

  render() {

    console.log("props in app.js", this.props);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>

        {this.props.userName ? (
          <ConnectedChat />
        ) : (
          <Redirect to="/"/>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.slacky.userName,
    websocket: state.slacky.websocket

  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateMessages: (messages) => dispatch({type: "UPDATEMESSAGES",messages:messages})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

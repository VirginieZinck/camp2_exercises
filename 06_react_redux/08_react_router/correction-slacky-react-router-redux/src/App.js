import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Chat from "./Chat";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
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

        <Switch>
          <Route path="/chat" render={(routerProps) =>
            this.props.userName
              ? <Chat
                  {...routerProps}
                />
              : <Redirect to="/"/>
          } />
          <Route render={() =>
            this.props.userName
              ? <Redirect to="/chat"/>
              : <Login />
          } />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default withRouter(connect(mapStateToProps)(App));

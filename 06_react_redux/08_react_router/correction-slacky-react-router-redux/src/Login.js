import React, { Component } from "react";
import { connect } from "react-redux";
import { connectWebsocket } from "./websocket"

function Login(props) {
  return (
    <form className="Login" onSubmit={event => {
      event.preventDefault();
      props.login(props.loginInputValue);
      connectWebsocket();
    }}>
      <div>
        Please choose a login name
      </div>
      <input
        type="text"
        onChange={props.updateLoginInputValue}
        value={props.loginInputValue}
      />
      <button type="submit">Log in</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    loginInputValue: state.loginInputValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoginInputValue: (event) => dispatch({
      type: "UPDATE_LOGIN_INPUT_VALUE",
      value: event.target.value
    }),
    login: (userName) => dispatch({
      type: "LOGIN",
      userName: userName
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// <Connect handleUserName={funct} loginInputValue updateLoginInputValue  >
//   <Login handleUserName={funct} loginInputValue updateLoginInputValue />
// </Connect>

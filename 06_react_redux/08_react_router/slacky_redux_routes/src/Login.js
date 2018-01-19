import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); //permet d'éviter que la page se recharge
    this.props.handleUserName(this.state.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>
        <form className="Login" onSubmit={this.handleSubmit}>
          <div>
            Please choose a login name
          </div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button type="submit">Log in</button>
          {this.props.userName ? (
            <Redirect to="/slacky"/>
          ) : (
            null
          )}

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.slacky.userName
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleUserName: (userName) => dispatch({type: "LOGIN",userName:userName})
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;

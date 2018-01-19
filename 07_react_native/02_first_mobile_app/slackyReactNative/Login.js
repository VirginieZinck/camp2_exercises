import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connectWebsocket } from "./websocket"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <Text>Please choose a login name </Text>

        <TextInput
          style={{height: 40}}
          placeholder="Enter your username"
          onChangeText={(text) => {this.props.updateLoginInputValue(text);}}
          onSubmitEditing={() => {
            this.props.login(this.props.loginInputValue);
            connectWebsocket();
          }}
          value={this.props.loginInputValue}
        />

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginInputValue: state.loginInputValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoginInputValue: (text) => dispatch({
      type: "UPDATE_LOGIN_INPUT_VALUE",
      value: text
    }),
    login: (userName) => dispatch({
      type: "LOGIN",
      userName: userName
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

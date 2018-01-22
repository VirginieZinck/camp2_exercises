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
      <View style={styles.login}>
        <Text style={{fontSize:40, padding:40}}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Please choose a login name "
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

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8cb3d9',
  },
  input: {
    fontSize: 25,
    height: 40,
    backgroundColor: 'white',

  },
});

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

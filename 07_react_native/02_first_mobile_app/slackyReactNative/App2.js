import React, { Component } from "react";
//import "./App.css";
import { StyleSheet, Text, View } from 'react-native';
 import Login from "./Login";
 import Chat from "./Chat";
//import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { init } from "./websocket"



class App2 extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return (
      <View>
        <Text>SLACKY</Text>
        {this.props.userName
          ? (<Chat />
          )
          : (<Login />)
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App2);

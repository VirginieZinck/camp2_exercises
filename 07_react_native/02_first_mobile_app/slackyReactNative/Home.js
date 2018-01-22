import React, { Component } from "react";
//import "./App.css";
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Login";
import Chat from "./Chat";
//import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { init } from "./websocket";

class Home extends Component {
  componentDidMount() {
    init();
  }

  render() {
    console.log("this.props.userName in app2",this.props.userName);
    return (
      <View style={styles.home}>
        <Text style={styles.title}>SLACKY</Text>
        <View style={styles.container}>
          {this.props.userName
            ? (<Chat />
            )
            : (<Login />)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    backgroundColor: '#8cb3d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    backgroundColor: '#8cb3d9',
    color: 'white',
    fontSize : 70,
    paddingTop: 100,
  },
  container: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(Home);

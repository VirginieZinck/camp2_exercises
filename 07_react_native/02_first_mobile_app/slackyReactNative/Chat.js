import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import Channel from "./Channel"

class Chat extends Component {
  render() {
    return (
      <View>
        <Channel />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Chat);

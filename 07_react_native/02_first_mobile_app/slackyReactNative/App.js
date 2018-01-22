import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from "./store";
import { Provider } from "react-redux";
import Home from './Home';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#8cb3d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});

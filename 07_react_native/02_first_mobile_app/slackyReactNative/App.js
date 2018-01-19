import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from "./store";
import { Provider } from "react-redux";
import App2 from './App2';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App2 />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

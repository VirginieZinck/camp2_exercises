import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessageToWS } from "./websocket"
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

class Channel extends Component {

  handleSubmit = () => {
    sendMessageToWS(this.props.chatMessageValue, this.props.channel);
    this.props.sendMessage();
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <TextInput
          style={{height: 10, padding:20, backgroundColor: 'powderblue'}}
          placeholder="Type your message"
          onChangeText={(text) => {this.props.updateChatMessageValue(text);}}
          onSubmitEditing={() => {this.handleSubmit}}
          value={this.props.chatMessageValue}
        />
        <FlatList
          style={styles.container}
          data={this.props.messages}
          renderItem={({message}) => <Text style={styles.message}>{message.userName} : {message.message}</Text>
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  message: {
    padding: 10,
    fontSize: 6,
    height: 10
  },
})

function mapStateToProps(state) {
  return {
    chatMessageValue: state.chatMessageValue,
    messages: state.messages,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    updateChatMessageValue: (event) => dispatch({
      type: "UPDATE_CHAT_INPUT_VALUE",
      value: event.target.value
    }),
    sendMessage: () => dispatch({
      type: "SEND_MESSAGE"
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);

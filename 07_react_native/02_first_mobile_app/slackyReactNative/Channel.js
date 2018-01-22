import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessageToWS } from "./websocket"
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleSubmit = () => {
    sendMessageToWS(this.props.chatMessageValue, this.props.channel);
    this.props.sendMessage();
    console.log("message value reset after sent", this.props.chatMessageValue);
  };

  render() {
    console.log("Messages list refreshed",this.props.messages);
    console.log("this.props.messages[0]",this.props.messages[0]);

    return (
      <View style={styles.channel}>

        {this.props.messages.length>0
          ? (
            <FlatList
              style={styles.list}
              data={this.props.messages}
              renderItem={({item}) =>
                <Text style={styles.message}>
                  {item.userName} : {item.message}
                </Text>
              }
            />
          )
          : (null)
        }
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          onChangeText={(text) => {this.props.updateChatMessageValue(text);}}
          onSubmitEditing={this.handleSubmit}
          value={this.props.chatMessageValue}
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  channel: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
   flexGrow: 2,
   backgroundColor: 'white'
  },
  message: {
    fontSize: 20
  },
  input: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black',
    fontSize: 20,
    height:80,
    alignSelf : 'stretch'
  }
})

function mapStateToProps(state) {
  return {
    chatMessageValue: state.chatMessageValue,
    messages: state.messages
  }
}


function mapDispatchToProps(dispatch) {
  return {
    updateChatMessageValue: (text) => dispatch({
      type: "UPDATE_CHAT_INPUT_VALUE",
      value: text
    }),
    sendMessage: () => dispatch({
      type: "SEND_MESSAGE"
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);

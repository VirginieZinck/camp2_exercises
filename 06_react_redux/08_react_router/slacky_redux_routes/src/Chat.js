import React, { Component } from "react";
import { connect } from 'react-redux'


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ""
    };
  }

  handleChange = event => {
    this.setState({ newMessage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.props.userName,this.state.newMessage);
    this.setState({ newMessage: "" });
  };

  componentDidUpdate() {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // This will make the list of messages scroll to the bottom each time
    // the component update, that way, the last message will always be visible
    this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  }

  render() {

    console.log("props in chat", this.props);

    return (
      <div className="Chat">
        <div
          className="Chat-messages"
          ref={(node) => {
            // refs allows you to have a reference to an element of the DOM
            // You should use this parcimoniously and don't change the DOM or React
            // will go crazy
            // See https://reactjs.org/docs/refs-and-the-dom.html
            this.messageListDiv = node;
          }}
        >
          {this.props.messages.map((message, index) =>
            (
              <div className="message-container" key={index}>
                <span className="author">{message.userName}</span>
                <span className="message">{message.message}</span>
              </div>
            )
          )}
        </div>
        <div className="Chat-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newMessage}
              onChange={this.handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.slacky.userName,
    messages: state.slacky.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (userName, message) => dispatch({type: "SENDMESSAGE",userName:userName, message:message})
  }
}


const ConnectedChat = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ConnectedChat;

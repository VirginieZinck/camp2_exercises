import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectionForm from './ConnectionForm';
import MsgTable from './MsgTable';
import MsgForm from './MsgForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.ws = new WebSocket("ws://localhost:3001");
    this.state = {
      connected: 0,
      userName:"",
      msgArray:[],
      userArray:[]
    };
  }

  componentDidMount() {

    // What to do when we receive a message from server?
    this.ws.onmessage = (event) => {

      const msgReceived=JSON.parse(event.data);
      console.log("Message: " + msgReceived);

      if (msgReceived.type==="MSG") {
        //we received a new chat : we add it to msgArray for display
        const newMsgArray = this.state.msgArray;
        newMsgArray.push({
          userName:msgReceived.data,
          msg:msgReceived.msg
        });

        this.setState({
          msgArray:newMsgArray
        },() => {
          console.log(`New message added ${msgReceived.msg} from ${msgReceived.userName}.`);
        });

      } else if (msgReceived.type==="USRLIST"){
        //we received an updated user list
        const newUserArray = msgReceived.UserList;

        this.setState({
          userArray:newUserArray
        },() => {
          console.log(`User list updated ${msgReceived.UserList}.`);
        });

      } else {
        console.warn("invalid message type", msgReceived.type);
      }
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => {

      const msgSent={
        type:"CLOSEUSR",
        userName:this.state.userName
      };
      this.ws.send(JSON.stringify(msgSent));
    });
  }

  connect = (userName) => {
    const newUserName = userName;
    console.log("newuserName",newUserName);

    const msgSent={
      type:"NEWUSR",
      userName:newUserName
    };

    this.setState({
      connected: 1,
      userName:newUserName
    },() => {
      // We send a message to server when we connect
      console.log(`User ${this.state.userName} is connected.`);
      this.ws.send(JSON.stringify(msgSent));
    });
  }

  createMsg = (msg) => {
    console.log("newMsg",msg);

    const newMsgArray = this.state.msgArray;
    newMsgArray.push({
      userName:this.state.userName,
      msg:msg
    });


    const msgSent={
      type:"MSG",
      msg:msg,
      userName:this.state.userName
    };

    this.setState({
      msgArray:newMsgArray
    },() => {
      // We send a message to server when we connect
      console.log(`New message added ${msg}.`);
      this.ws.send(JSON.stringify(msgSent));
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title pb-5">Welcome to Slacky</h1>
        <ConnectionForm
          onSubmit={this.connect}
          connected={this.state.connected}
          userName={this.state.userName}
        />
        <div className="container ">
          <div id="msg" className="row justify-content-center">
            <h4>Messages</h4>
          </div>
          <MsgTable msgArray={this.state.msgArray}/>
        </div>
        <MsgForm connected={this.state.connected} onSubmit={this.createMsg}/>
      </div>
    );
  }
}

export default App;

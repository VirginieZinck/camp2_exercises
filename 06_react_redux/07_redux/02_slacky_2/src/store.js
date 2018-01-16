import { createStore } from 'redux';


const initialState = {
  userName: null,
  messages: [{userName:"",message:""}],
  websocket: new WebSocket("ws://localhost:8080")
};


function slackyReducer(state = initialState, action) {
  switch (action.type) {

  case 'UPDATEMESSAGES':
    console.log("update messages", action.messages);
    return {
      ...state,
      messages: action.messages
    }

  case 'LOGIN':

    state.websocket.send(
      JSON.stringify({
        type: "LOGIN",
        userName: action.userName
      })
    );

    return {
      ...state,
      userName: action.userName
    }

  case 'SENDMESSAGE':
    state.websocket.send(
      JSON.stringify({
        type: "NEW_MESSAGE",
        userName: action.userName,
        message: action.message
      })
    );

  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(slackyReducer);


export default store;

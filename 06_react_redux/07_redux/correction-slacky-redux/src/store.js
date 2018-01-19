import { createStore } from "redux";

const initialState = {
  userName: null,
  messages: [],
  loginInputValue: "",
  chatMessageValue: ""
}

function slacky(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_LOGIN_INPUT_VALUE":
      return {
        ...state,
        loginInputValue: action.value
      };
    case "LOGIN":
      return {
        ...state,
        userName: action.userName,
        loginInputValue: ""
      }
    case "WS_UPDATE_MESSAGES":
      return {
        ...state,
        messages: action.messages
      }
    case "SEND_MESSAGE":
      return {
        ...state,
        chatMessageValue: ""
      }
    case "UPDATE_CHAT_INPUT_VALUE":
      return {
        ...state,
        chatMessageValue: action.value
      };
    default:
      return state;
  }
}

let store = createStore(slacky);

export default store;

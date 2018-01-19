import store from "./store";

// Attaching the websocket to our App so we can reuse it
let websocket;

function init() {
  websocket = new WebSocket("ws://localhost:8080");


  websocket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    console.log("Message from server ", message);
    switch (message.type) {
      case "MESSAGES":
        store.dispatch({
          type: "WS_UPDATE_MESSAGES",
          messages: message.data
        });
        break;
      default:
        break;
    }
  });
}

function connectWebsocket() {
  websocket.send(
    JSON.stringify({
      type: "LOGIN",
      userName: store.getState().userName
    })
  );
}

function sendMessageToWS(message, channel) {
  websocket.send(
    JSON.stringify({
      type: "NEW_MESSAGE",
      userName: store.getState().userName,
      message: message,
      channel: channel
    })
  );
}

export { init, connectWebsocket, sendMessageToWS };

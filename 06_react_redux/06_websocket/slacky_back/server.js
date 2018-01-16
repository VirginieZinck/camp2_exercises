const express = require("express");
const WebSocket = require("ws");
const http = require("http");
const path = require("path");

// Express will only serve static file
const app = express();
app.use(express.static(path.join(__dirname, "../slacky_front/public")));

// We open a websocket connection
const server = http.createServer(app);
const wss = new WebSocket.Server({server:server});

let numberOfUsers = 0;

wss.on("connection", (ws, req) => {
  numberOfUsers += 1;
  console.log("nb of users incremented by one");

  ws.on("message", (data) => {

    console.log("message received", data);
    const msgReceived=JSON.parse(data);

    if (msgReceived.type === "CLOSEUSR") {
      //one user left
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          const msgSent={
            type:"MSG",
            userName:msgReceived.userName,
            msg:`${msgReceived.userName} user left`
          };
          client.send(JSON.stringify(msgSent));
        }
      });
    } else if (msgReceived.type==="NEWUSR") {
      //one user logged in
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          const msgSent={
            type:"MSG",
            userName:msgReceived.userName,
            msg:`${msgReceived.userName} user connected`
          };
          client.send(JSON.stringify(msgSent));
        }
      });
    } else if (msgReceived.type==="MSG") {
      //new message
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          const msgSent={
            type:"MSG",
            userName:msgReceived.userName,
            msg:msgReceived.msg
          };
          client.send(JSON.stringify(msgSent));
        }
      });
    }
  });
});

server.on("request", app);
server.listen(3001, () => console.log(`Server listening on 3001`));

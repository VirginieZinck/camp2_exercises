import React, { Component } from 'react';

function MsgTable(props) {

  return props.msgArray.map((msg) =>
    <p>{msg.userName} : {msg.msg}</p>
  );

}

export default MsgTable;

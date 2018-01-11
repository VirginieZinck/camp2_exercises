import React, { Component } from 'react';

function Label(props) {
  if (props.checked(props.item)) {
    return (
      <span><strike>{props.item.label}</strike></span>
    );
  } else {
    return (
      <span>{props.item.label}</span>
    );
  }
}

export default Label;

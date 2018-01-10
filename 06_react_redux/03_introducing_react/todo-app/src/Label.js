import React, { Component } from 'react';

function Label(props) {
  if (props.checked(props.item)) {
    return (
      <div className="col">
        <strike>{props.item.label}</strike>
      </div>
    );
  } else {
    return (
      <div className="col">
        {props.item.label}
      </div>
    );
  }
}

export default Label;

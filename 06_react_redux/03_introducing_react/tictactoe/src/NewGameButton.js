import React, { Component } from 'react';


function NewGameButton(props) {
  console.log(props);
  return (
    <button
      type="submit"
      onClick={props.function}
      className="btn btn-sm btn-secondary"
    >
      New Game ?
    </button>

  );
}

export default NewGameButton;

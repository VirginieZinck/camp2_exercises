import React, { Component } from 'react';


class DeleteButton extends React.Component {

  handleClick = () => {
    console.log('The delete button was clicked.');
    this.props.function(this.props.index);
  }

  render() {
    return (
      <button
        type="submit"
        onSubmit={this.handleClick}
        className="btn btn-primary"
      >
        Delete
      </button>

    );
  }
}

export default DeleteButton;

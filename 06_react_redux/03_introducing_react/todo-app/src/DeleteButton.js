import React, { Component } from 'react';


class DeleteButton extends React.Component {

  handleClick = () => {
    console.log('The delete button was clicked.');
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <button
        type="submit"
        onClick={this.handleClick}
        className="btn btn-sm btn-secondary"
      >
        Delete
      </button>

    );
  }
}

export default DeleteButton;

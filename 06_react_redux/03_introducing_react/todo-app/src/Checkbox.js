import React, { Component } from 'react';


class Checkbox extends React.Component {

  onCheck = () => {
    console.log('The delete button was clicked.');
    this.props.onCheck(this.props.item, this.props.index);
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked(this.props.item)}
        name="{item.status}"
        onClick={this.onCheck}
      />
    )
  }
}

export default Checkbox;

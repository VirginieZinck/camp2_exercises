import React, { Component } from 'react';


class MsgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    console.log("affichage du composant Msg form", this.props);


    if (this.props.connected===0) {
      console.log("connected===0");
      return null;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group pt-3">
            <label className="mx-2" for="newTask">
              Enter message
              <input
                type="text"
                className="form-control-sm mx-2"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter your message"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      );
    }
  }
}


export default MsgForm;

import React, { Component } from 'react';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.function(this.state.value);
    event.preventDefault();
  }

  render() {
    return (


      <form onSubmit={this.handleSubmit}>
        <div className="form-group pt-3">
          <label className="mx-2" for="newTask">
            New task
            <input
              type="text"
              className="form-control-sm mx-2"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter task label"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>

    );
  }
}


export default TaskForm;

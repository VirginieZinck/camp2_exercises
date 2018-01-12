import React, { Component } from 'react';


class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState(
      {address: event.target.value},
      ()=>console.log(this.state)
    );
  }

  onSubmit(event) {

    this.props.onSubmit(this.state.address);
    event.preventDefault();
  }

  render() {
    return (


      <form onSubmit={this.onSubmit}>
        <div className="form-group pt-3">
          <input
            type="text"
            className="form-control-sm"
            value={this.state.address}
            onChange={this.onChange}
            placeholder="Enter address"
          />
          <button type="submit" className="btn-sm btn-secondary">
            Get weather
          </button>
        </div>
      </form>

    );
  }
}


export default AddressForm;

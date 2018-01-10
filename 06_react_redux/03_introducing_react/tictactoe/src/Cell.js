import React, { Component } from 'react';

class Cell extends Component {

  disable() {
    if (this.props.value) {
      return true;
    } else {
      return false;
    }

  }

  render() {
    return (
      <div className="col border border-secondary rounded">
        <button
          type="submit"
          disabled={this.disable()}
          onClick={()=>{
            this.props.function(
              this.props.nextPlayer,
              this.props.row,
              this.props.col
            )
          }}
          className="btn btn-light"
        >

          {this.props.value}

        </button>
      </div>
    );
  }
}

export default Cell;

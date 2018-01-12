import React, { Component } from "react";
import _ from "underscore";

function Row(props) {
  return (
    <tr>
      <td id="td1">{props.decathlon_id}</td>
      <td id="td2">{props.title}</td>
      <td id="td3">{props.price}</td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.props.lines,
      sortedBy: "decathlon_id",
      reverseSort: false
    };
  }

  filter(filterBy) {
    if (this.state.sortedBy === filterBy) {
      this.setState({reverseSort: !this.state.reverseSort});
    } else {
      this.setState({
        sortedBy: filterBy,
        reverseSort: false
      });
    }
  }

  render() {
    let sortedLines = _.sortBy(this.state.lines, this.state.sortedBy);
    if (this.state.reverseSort) {
      sortedLines.reverse();
    }
    return (
      <table>
        <thead>
          <tr>
            <th id="th1" onClick={() => this.filter("decathlon_id")}>ID</th>
            <th id="th2" onClick={() => this.filter("title")}>Title</th>
            <th id="th3" onClick={() => this.filter("price")}>Price</th>
          </tr>
        </thead>
        {sortedLines.map(Row)}
      </table>
    );
  }
}

export default App;

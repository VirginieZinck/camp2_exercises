import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class ToDoList extends Component {
  constructor (props) {
    super(props);
    this.state = {list:[
      {status:"Done",label:"Faire mon EAD"},
      {status:"Open",label:"Dentiste"}
    ]};
  }

  checked(item) {
    return item.status==="Done";
  }

  onClick(item,index) {
    let newList = this.state.list;
    newList[index].status = "Done";

    this.setState({list: newList}, () => console.log(this.state))
  }

  render() {
    return (
      <div className="container">
        <form >
          <div className="form-group pt-3">
            <label className="mx-2" for="newTask">New task </label>
            <input type="text" className="form-control-sm mx-2" id="newTask" placeholder="Enter task label"/>
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
        <div className="row">
            <th> Tasks </th>
        </div>
          {this.state.list.map((item,index)=>{
          return (
            <div className="row">
              <div className="col-2">
                <input
                  type="checkbox"
                  checked={this.checked(item)}
                  name="{item.status}"
                  onClick={()=>this.onClick(item, index)}
                />
              </div>
              <div className="col">{item.label}</div>
            </div>
          )
        })}
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">ToDo List</h1>
        <ToDoList/>
      </div>
    );
  }
}

export default App;

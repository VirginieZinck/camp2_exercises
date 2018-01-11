import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import TaskForm from './TaskForm';


class ToDoList extends Component {
  constructor (props) {
    super(props);
    this.state = {list:[
      {status:"Done",label:"Faire mon EAD"},
      {status:"ToDo",label:"Dentiste"}
    ]};
  }

  checked = (item) => {
    return item.status==="Done";
  }

  checkTask = (item,index) => {
    let newList = this.state.list;

    if (newList[index].status === "Done") {
      newList[index].status = "Todo";
    } else {
    newList[index].status = "Done";
    }

    this.setState({list: newList}, () => console.log(this.state))
  }

  createTask = (label) => {
    let newList = this.state.list;
    newList.push({status:"Todo",label:label});

    this.setState({list: newList}, () => console.log(this.state))
  }

  deleteTask = (index) => {
    let newList = this.state.list;
    newList.splice(index,1);

    this.setState({list: newList}, () => console.log(this.state))

  }

  render() {
    return (
      <div className="container">

        <TaskForm function={this.createTask}/>

        <div className="row">
            <th> Tasks </th>
        </div>

        {this.state.list.map( (item,index)=>{
          return (
            <Row
              item={item}
              index={index}
              checked={this.checked}
              onCheck={this.checkTask}
              onDelete={this.deleteTask}
            />
          );
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

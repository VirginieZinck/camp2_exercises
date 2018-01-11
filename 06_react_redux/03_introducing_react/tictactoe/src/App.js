import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
import NewGameButton from './NewGameButton';

function emptyGrid() {
  const grid = {
    a: Array(3).fill(null),
    b: Array(3).fill(null),
    c: Array(3).fill(null)
  };
  return grid;
}

const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      grid:emptyGrid(),
      nextPlayer:"X",
      message:"Next player: X",
      disableGrid:false
    };
  }

  hasWinner = () => {
    const isWinningLine = (line) => {
      const pattern =
        line
          .map((coordinate) => this.state.grid[coordinate.letter][coordinate.digit])
          .join("");
      return pattern === "XXX" || pattern === "OOO";
    };
    return WINNING_COORDINATES.some(isWinningLine);
  }

  updateCell = (nextPlayer,row,col) => {
    let message="";
    let newGrid=this.state.grid;
    let disableGrid=this.state.disableGrid;
    newGrid[row][col]=nextPlayer;

    //check if hasWinner
    if (this.hasWinner()) {
      message=`Player ${nextPlayer} : congratulations, you won!!!`;
      disableGrid=true;
    } else {
      //update next Player
      if (nextPlayer==="O") {
        nextPlayer="X";
      } else {
        nextPlayer="O";
      }
      message=`Next player : ${nextPlayer}`;
    }

    this.setState(
      {
        grid:newGrid,
        nextPlayer:nextPlayer,
        message:message,
        disableGrid:disableGrid
      },
      () => console.log("state dans updateCell:", this.state)
    );
  }

  resetGrid = () => {
    this.setState(
      {
        grid:emptyGrid(),
        disableGrid:false,
        message:`Next player : ${this.state.nextPlayer}`

      },
      () => console.log("state dans resetGrid:", this.state)
    );
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title pb-3">Tic-Tac-Toe</h1>
          <div className="container">
            <div className="row">
                <Cell row="a" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[0]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="a" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[1]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="a" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[2]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
            </div>
            <div className="row">
                <Cell row="b" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[0]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="b" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[1]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="b" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[2]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
            </div>
            <div className="row">
                <Cell row="c" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[0]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="c" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[1]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
                <Cell row="c" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[2]} onUpdate={this.updateCell} disable={this.state.disableGrid}/>
            </div>
          </div>
          <h5 className="pt-3 pb-3">{this.state.message}</h5>
          <NewGameButton function={this.resetGrid}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
import tictactoe from './tictactoe';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      grid:tictactoe.emptyGrid,
      nextPlayer:"X"
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

    return tictactoe.WINNING_COORDINATES.some(isWinningLine);
  }

  updateCell = (nextPlayer,row,col) => {
    //update Grid
    let newGrid=this.state.grid;
    newGrid[row][col]=nextPlayer;

    //check if hasWinner
    if (this.hasWinner()) {
      nextPlayer="You Won!!!"
    };

    //update next Player
    if (nextPlayer==="O") {
      nextPlayer="X";
    } else {
      nextPlayer="O";
    }

    this.setState(
      {
        grid:newGrid,
        nextPlayer:nextPlayer
      }
    );
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title pb-3">Tic-Tac-Toe</h1>
          <h5 className="pb-3">Next player : {this.state.nextPlayer}</h5>
          <div className="container">
            <div className="row">
                <Cell row="a" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[0]} function={this.updateCell}/>
                <Cell row="a" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[1]} function={this.updateCell}/>
                <Cell row="a" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.a[2]} function={this.updateCell}/>
            </div>
            <div className="row">
                <Cell row="b" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[0]} function={this.updateCell}/>
                <Cell row="b" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[1]} function={this.updateCell}/>
                <Cell row="b" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.b[2]} function={this.updateCell}/>
            </div>
            <div className="row">
                <Cell row="c" col="0" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[0]} function={this.updateCell}/>
                <Cell row="c" col="1" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[1]} function={this.updateCell}/>
                <Cell row="c" col="2" nextPlayer={this.state.nextPlayer} value={this.state.grid.c[2]} function={this.updateCell}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

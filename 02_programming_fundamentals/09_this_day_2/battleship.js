const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const grid = {
  A: Array(10).fill("~"),
  B: Array(10).fill("~"),
  C: Array(10).fill("~"),
  D: Array(10).fill("~"),
  E: Array(10).fill("~"),
  F: Array(10).fill("~"),
  G: Array(10).fill("~"),
  H: Array(10).fill("~"),
  I: Array(10).fill("~"),
  J: Array(10).fill("~")
};

const letters = Object.keys(grid);

let shipPosition = {
  index:0,
  letter:" "
};


function displayGrid() {
  //displayHeader
  const formattedHeader="   1 2 3 4 5 6 7 8 9 10";
  //display GridRows
  return formattedGrid = formattedHeader + "\n" + letters.map(formatRow).join("\n");
}

function formatRow(rowLetter) {
  const formattedRow = `${rowLetter}  ${grid[rowLetter].join(" ")}`;
  return formattedRow;
}

function pickShipPosition() {
  shipPosition.index = Math.floor(Math.random()*10);
  shipPosition.letter = letters[Math.round(Math.random()*10)];
  console.log(`ship position : ${shipPosition.letter}${shipPosition.index+1}`);
  return shipPosition;
}

function formatPosition(input) {
  return position = {
    letter: input.charAt(0),
    index: parseInt(input.charAt(1),10)-1
  };
}

function isValidPosition(position) {
    if (grid[position.letter]===undefined) {                  //invalid letter
      return false;
    } else if (grid[position.letter][position.index]===undefined) {
      return false;
    } else {
      return true;
    }
}

function isShipFound(position) {
  if ((position.letter === shipPosition.letter) &&
      (position.index === shipPosition.index)) {
    return true;
  } else {
    return false;
  }
}

function askCoordinate() {

  console.log(displayGrid());
  reader.question(`Pick a cell ! =>`, (input)=>{

    const position = formatPosition(input);
    if (isValidPosition(position)) {

      if (isShipFound(position)) {
        grid[position.letter][position.index]="X";
        console.log(displayGrid());
        console.log("You found the ship !");
        reader.close();
      } else {
        console.log("Try again !");
        askCoordinate();
      }
    } else {
      console.log("Invalid input, try again !");
      askCoordinate();
    }
  });

}

pickShipPosition();

askCoordinate();

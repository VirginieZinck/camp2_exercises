const readline = require("readline");
const fs = require("fs");


function readGameLog() {
  if (fs.existsSync("gameLog.json")) {
    //file exists
    let data = fs.readFileSync("gameLog.json");
    gameLog = JSON.parse(data);
  } else {
    //file doesn't exist
    gameLog = {
      nbGames: 0,
      bestScore:undefined
    };
  }
  console.log(gameLog);
  return gameLog;
}

function writeGameLog(gameLog) {
  fs.writeFile("gameLog.json", JSON.stringify(gameLog), (error) => {
    if(error) {
      console.warn(error);
      return;
    }
  });
}


function askQuestion(numberToGuess) {

  reader.question("Guess ! =>", (input) => {

    let inputInt = parseInt(input,10);
    console.log(`The number you chose is : ${inputInt}!`);
    nbOfTries += 1;

    if (isNaN(inputInt)) {
      console.log(`The number you chose is not a number : ${input}!`);
      askQuestion(numberToGuess);
    }
    else if (inputInt !== Math.floor(inputInt)) {
      console.log(`The number you chose is not an integer : ${inputInt}!`);
      askQuestion(numberToGuess);
    }
    else if (inputInt<0 || inputInt>100) {
      console.log(`Out of range : ${inputInt}! The number should be between 0 & 100`);
      askQuestion(numberToGuess);
    }
    else if (inputInt>100) {
      console.log(`The number you chose is too high : ${inputInt}!`);
      askQuestion(numberToGuess);
    }
    else if (inputInt < numberToGuess) {
      console.log("Too low..");
      askQuestion(numberToGuess);
    }
    else if (inputInt > numberToGuess) {
      console.log("Too high..");
      askQuestion(numberToGuess);
    }
    else {

      if (nbOfTries > 1) {
        console.log(`Well done !!! You found the number to guess ${numberToGuess} in ${nbOfTries} tries!!`);
      }
      else {
        console.log(`Incredible!!! You found the number to guess ${numberToGuess} in only ${nbOfTries} try!!`);
      }
      reader.close();

      //End of game record un json nb of games played & best score
      gameLog.nbGames++;
      if (gameLog.bestScore>nbOfTries || gameLog.bestScore===undefined) {
        gameLog.bestScore=nbOfTries;
        console.log(`You beat your last record ! New best score : ${gameLog.bestScore}. \n`);
        console.log(`You played ${gameLog.nbGames} games.`);
      } else {
        console.log(`You played ${gameLog.nbGames} games.`);
        console.log(`Your best score is: ${gameLog.bestScore}. \n`);
      }
      writeGameLog(gameLog);
    }

  });
}



// start game
let gameLog = {
  nbGames: 0,
  bestScore:0
};

gameLog = readGameLog();

console.log("Welcome to the number game !");
console.log(`You played ${gameLog.nbGames} games.`);
console.log(`Your best score is: ${gameLog.bestScore}. \n`);

const numberToGuess = Math.floor(Math.random()*100);
console.log(numberToGuess);
console.log("Try to guess our number between 0 & 100.");
let nbOfTries = 0;

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

askQuestion(numberToGuess);

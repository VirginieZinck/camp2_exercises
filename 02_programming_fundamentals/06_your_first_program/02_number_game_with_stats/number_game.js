const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const numberToGuess = Math.floor(Math.random()*100);
console.log(numberToGuess);
console.log("Try to guess our number between 0 & 100.");
let nbOfTries = 0;

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
    }

  });
}

askQuestion(numberToGuess);

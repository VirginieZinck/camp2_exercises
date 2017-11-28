// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");

const cards = ["🌲","🐰", "🎃", "🎃", "🐰", "🌲"];
let mixedCards = [];
let returnedCards = ["1","2","3","4","5","6"];


function mixCards(cards) {
  let randomIndex;
  for (let i=0;i<cards.length;i++) {
    randomIndex = Math.floor(Math.random()*6);
    mixedCards.splice(randomIndex,0,cards[i]);
  }
  console.log(mixedCards);
}


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newTry() {

  let firstCard;
  let firstIndex;
  let secondCard;
  let secondIndex;

  clear();
  console.log(returnedCards);

  reader.question("Give nb of 1st card you want to return=>", (input) => {

    firstIndex = returnedCards.indexOf(input);

    if (firstIndex === -1) {
      console.log(`invalid input ${input}`);
      reader.question("Ready ? if yes, type any key", newTry);
    } else {
      firstCard = mixedCards[firstIndex];
      console.log(`First card : ${firstCard}`);
    }

    reader.question("Give nb of 2nd card you want to return=>", (input) => {

      secondIndex = returnedCards.indexOf(input);

      if (secondIndex === -1 || secondIndex === firstIndex) {
        console.log(`invalid input ${input}`);
        reader.question("Ready ? if yes, type any key", newTry);
      } else {
        secondCard = mixedCards[secondIndex];
        console.log(`Second card : ${secondCard}`);
      }

      if (firstCard === secondCard) {
        console.log("You found a pair !");
        returnedCards[firstIndex] = mixedCards[firstIndex];
        returnedCards[secondIndex] = mixedCards[secondIndex];
      }

      if (returnedCards.join() === mixedCards.join()) {
        console.log("Well done! You won!");
        console.log(returnedCards);
        reader.close();
      } else {
        reader.question("Ready ? if yes, type any key", newTry);
      }

    });
  });
}

mixCards(cards);
newTry();

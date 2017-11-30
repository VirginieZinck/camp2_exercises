const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
};

// Write a function sayHello that greets: "Hello, Spartacus". (Where "Spartacus" is the player name)
function sayHello(player) {
  console.log("Hello, "+player.name);
}

function displayStrength(player) {
  console.log(`Hello, ${player.name}, your strength is ${player.strength}`);
}

function changeStrength(player) {
  player.strength=player.strength+10;
  console.log(`Hello, ${player.name}, your strength is ${player.strength}`);
}


thisIsThePlayer(sayHello);
thisIsThePlayer(displayStrength);
thisIsThePlayer(changeStrength);

const myArray = [1,2,3];

function functionX2(value) {
  return value*2;
}

const myNewArray=myArray.map(functionX2);
console.log(myNewArray);

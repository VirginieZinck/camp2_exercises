// See Sparta courses for the exercise summary
const container = require("./container");

const machine = {
  fillWithLitersOfCoffee: function(liters) {
    container.putLitersOfCoffee(liters);
  },
  expresso: function() {
    const expressoSize = 0.08;
    return container.consumeLitersOfCoffee(expressoSize);
  },
  longCoffee: function() {
    const longSize = 0.15;
    return container.consumeLitersOfCoffee(longSize);
  }
};




// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false

module.exports = machine;

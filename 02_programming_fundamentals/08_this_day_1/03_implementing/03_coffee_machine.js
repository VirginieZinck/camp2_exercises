// See Sparta courses for the exercise summary

const machine = {
  litersOfCoffee:0,
  fillWithLitersOfCoffee: function(liters) {
    this.litersOfCoffee = this.litersOfCoffee + liters;
  },
  expresso: function() {
    const expressoSize = 0.08;
    if (this.litersOfCoffee-expressoSize>=0) {
      this.litersOfCoffee=this.litersOfCoffee-expressoSize;
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function() {
    const longSize = 0.15;
    if (this.litersOfCoffee-longSize>=0) {
      this.litersOfCoffee=this.litersOfCoffee-longSize;
      return true;
    } else {
      return false;
    }
  }
};




// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false

module.exports = machine;

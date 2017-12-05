
const container = {
  litersInContainer:0,
  putLitersOfCoffee: function(numberOfLiters) {
    this.litersInContainer=this.litersInContainer+numberOfLiters;
  },
  consumeLitersOfCoffee: function(numberOfLiters) {
    if ((this.litersInContainer-numberOfLiters)>=0) {
      this.litersInContainer=this.litersInContainer-numberOfLiters;
      return true;
    } else {
      return false;
    }
  }
};

module.exports = container;

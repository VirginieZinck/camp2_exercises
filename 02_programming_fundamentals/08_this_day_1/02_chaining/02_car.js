// See Sparta courses for the exercise summary
//
// Create an object car with four functions:
//
// start() will reset all the car data
// changeSpeed(speed) will change the km/h speed of the car
// drive(minutes) will make your car drive at the previously set speed for that amount of time in minutes
// showDistance() will print the distance you drove as the number of kilometers
// Take care to stock that data inside the object. For instance the code
// car.start().changeSpeed(130).drive(42).showDistance();
// should display 91 Km.


const car = {
  speed:0,
  minutes:0,
  distance:0,
  start: function() {
    this.speed=0;
    this.minutes=0;
    this.distance=0;
    return this;
  },
  changeSpeed: function(input) {
    this.speed=input;
    return this;
  },
  drive: function(input) {
    this.minutes=input;
    this.distance = this.distance + this.minutes/60*this.speed;
    return this;
  },
  showDistance: function() {
    console.log(`${this.distance} Km`);
    return this;
  }
};

car.start().changeSpeed(130).drive(42).showDistance();


module.exports = car;

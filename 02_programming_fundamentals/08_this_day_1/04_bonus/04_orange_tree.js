// See Sparta courses for the exercise summary
//
//
// Tip: Paying attention to the tests may help you understand the expected implementation details for this exercise.


const orangeTree = {
  height:0, // (in cm)
  age:0, //(in year)
  oranges:0,
  alive:true,

  pickAnOrange: function() {
    if (this.oranges>0){
      this.oranges=this.oranges-1;
      return true;
    } else {
      return false;
    }
  },

  ageOneYear: function() {

    // the Orange Tree should age each year
    if (this.alive===false) {
      console.log(`Tree already dead at age ${this.age}`);
      return false;

    } else {
      this.age=this.age+1;
    }

    // it should grow each year:
    // 25 centimeters until it is 10 years old
    // 10 centimeters until it is 20 years old
    if (this.age<10) {
      this.height=this.height+25
    } else if (this.age<20) {
      this.height=this.height+10
    }

    // it should produce each year:
    // 10 oranges when it's between 5 and 10 years old
    // 20 oranges when it's between 10 and 20 years old
    // 5 oranges until it's 40 years old
    if (this.age>=5 && this.age<10) {
      this.oranges=10;
    } else if (this.age>=10 && this.age<20) {
      this.oranges=20;
    } else if (this.age>=20 && this.age<40) {
      this.oranges=5;
    } else {
      this.oranges=0;
    }

    // it should not die until it is at least 50 years old and can't get past 100 years
    // Bonus Point: Make it so that the probability for the Orange Tree to die gets bigger as the time passes.
    if (this.age>=50 && this.age<100) {

      let entre0et1=Math.random();
      //on prend l'exponentiel pour augmenter les probas d'avoir une mort agée
      entre0et1=Math.exp(entre0et1)/2.71828; //exp(1)
      const ageOfDeath=50+Math.round(entre0et1*50);

      if (this.age>=ageOfDeath) {
        this.alive=false;
        console.log(`Age of death ${ageOfDeath} : tree's age ${this.age}`);
      }
    } else {
      if (this.age>=100) {
        this.alive=false;
      }
    }
    return true;
  },

  // When we seed an orangeTree, it resets all its attributes
  seed: function() {
    this.height=0;
    this.age=0;
    this.oranges=0;
    this.alive=true;
  }
};


module.exports = orangeTree;

// Implement this aquarium following these rules (respect the name of classes and methods):
//
// An aquarium contain fishes and algaes
// Fish has name and sex
// The aquarium has a method to add a fish
// The aquarium has a method to add an algue
// The aquarium has a method to pass time, each turn we make some actions
// Each turn, we want to display the number of algaes and list fishes with name and sexes
// The aquarium should contain different kind of fishes (some carnivorous and some vegan)
// Each turn, fishes try to eat something (algue or other fishes if they are vegan or carnivorous)
// If something was eaten, it should be removed from the aquarium


class Fish {
  constructor(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

class Algue {
  constructor(name) {
    this.name = name;
  }
}

let aquarium = {
  algues: [],
  fishes: [],
  addFish: function(name,sex,type) {
    let fish = new Fish(name,sex,type);
    this.fishes.push(fish);
  },
  addAlgue: function(name) {
    let algue = new Algue(name);
    this.algues.push(algue);
  },
  passTime: function() {
    console.log("At the beginning of turn :");
    console.log("algues",this.algues);
    console.log("fishes",this.fishes);

    //fishes try to eat something
    for (let i=0;i<this.fishes.length;i++) {

      //fish is vegan, it tries to eat an algue
      if (this.fishes[i].type === "vegan") {

        //there is at least one algue remaining
        if (this.algues.length > 0) {
          //we choose an algue randomly and the fish eats it
          const randomAlgueIndex = Math.floor(Math.random() * this.algues.length);
          this.algues.splice(randomAlgueIndex,1);
        }
      }

      //fish is carnivo, it tries to eat a fish
      if (this.fishes[i].type === "carnivor") {

        //there are at least two fishes remaining
        if (this.fishes.length > 1) {
          //the fish at index i eats another fish randomly
          let randomFishIndex = Math.floor(Math.random() * this.fishes.length);

          //but it cannot eat himself !!
          if (randomFishIndex===i) {
            if (i===0) {randomFishIndex++;}
            else {randomFishIndex--;}
          }
          this.fishes.splice(randomFishIndex,1);
        }
      }
    }

    console.log("At the end of turn :");
    console.log("algues",this.algues);
    console.log("fishes",this.fishes);
  }
};

aquarium.addFish("Fish1","boy","carnivor");
aquarium.addFish("Fish2","boy","vegan");
aquarium.addFish("Fish3","girl","carnivor");
aquarium.addFish("Fish4","girl","vegan");
aquarium.addAlgue("Algue1");
aquarium.addAlgue("Algue2");
aquarium.addAlgue("Algue3");
aquarium.addAlgue("Algue4");

console.log("TURN1 =>");
aquarium.passTime();
console.log("TURN2 =>");
aquarium.passTime();
console.log("TURN3 =>");
aquarium.passTime();

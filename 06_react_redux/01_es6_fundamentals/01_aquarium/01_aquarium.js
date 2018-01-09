// Insert code here

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

class Algae {
  constructor(size) {
    this.size = size;
  }
}

class Aquarium {
  constructor(fishes,algaes) {
    this.algaes=algaes;
    this.fishes=fishes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  veganFishesEat(fish, algaes) {

    //there is at least one algue remaining
    if (algaes.length > 0) {
      //we choose an algue randomly and the fish eats it
      const randomAlgueIndex = Math.floor(Math.random() * algaes.length);
      algaes.splice(randomAlgueIndex,1);
    }
    return algaes;
  }

  carnivorFishesEat(fish, fishIndex, fishes) {

    //there are at least two fishes remaining
    if (fishes.length > 1) {
      //the fish at index i eats another fish randomly
      let randomFishIndex = Math.floor(Math.random() * fishes.length);

      //but it cannot eat himself !!
      if (randomFishIndex===fishIndex) {
        if (fishIndex===0) {randomFishIndex++;}
        else {randomFishIndex--;}
      }
      fishes.splice(randomFishIndex,1);

      return fishes;
    }
  }

  endTurn() {
    //fishes try to eat something
    this.fishes.forEach((fish,fishIndex)=>{

      //fish is vegan (type=1), it tries to eat an algue
      if (fish.type === 1) {
        this.algaes = this.veganFishesEat(fish,this.algaes);
      }

      //fish is carnivor (type=0), it tries to eat a fish
      if (fish.type === 0) {
        this.fishes = this.carnivorFishesEat(fish,fishIndex,this.fishes);
      }
    });

    console.log("At the end of turn :");
    console.log("algues",this.algaes);
    console.log("fishes",this.fishes);
  }
}

const fishes=[
  {name:"Fish1",sex:"boy",type:0},
  {name:"Fish2",sex:"boy",type:1},
  {name:"Fish3",sex:"girl",type:0},
  {name:"Fish4",sex:"girl",type:1}
];

const algaes=[
  {size:10},
  {size:12},
  {size:15},
  {size:18}
];

const myAquarium = new Aquarium(fishes,algaes);

console.log("TURN1 =>");
myAquarium.endTurn();
console.log("TURN2 =>");
myAquarium.endTurn();

console.log("ADD A FISH =>");
const newFish= new Fish("Fish5","boy","vegan");
myAquarium.addFish(newFish);
console.log("Fishes:",fishes);

console.log("TURN3 =>");
myAquarium.endTurn();


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};

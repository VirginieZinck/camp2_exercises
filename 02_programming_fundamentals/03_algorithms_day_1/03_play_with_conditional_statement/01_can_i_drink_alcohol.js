// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.
//
// Create two objects, `francis`, `frieda` with the fields : `age` (an integer) and `name`, (obviously a string)
const frieda = {age:30,name:"Frieda"};
const francis = {age:12,name:"Francis"};

// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer, respectively, to the question "Can he / she drink
// alcohol.".
// These variables should stay correct if we modify the ages of the objects `francis` and `frieda` in the declaration.

let canFriedaDrinkAlcohol = false;
let canFrancisDrinkAlcohol = false;

if (frieda.age > 18) {canFriedaDrinkAlcohol=true;}
if (francis.age > 18) {canFrancisDrinkAlcohol=true;}

console.log(`Frieda is ${frieda.age}. Can she drink alcohol ? ${canFriedaDrinkAlcohol}`);
console.log(`Francis is ${francis.age}. Can he drink alcohol ? ${canFrancisDrinkAlcohol}`);

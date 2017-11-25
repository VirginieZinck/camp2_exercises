// Create a function double which take an integer and return the double of the integer.
// Then, try to create a function called map. This function should take two parameters:
//
// - an array
// - a function
//
// this function apply the function passed as a parameter on each values of the array (also passed as a parameter).
//
// Finally, test map with an array of your choice and the double function.
//
// WARNING: You're not allowed to use `Array.map`!

function double(val) {
  return val*2;
}

function map(array,fn) {

  let resultArray=[];

  // if (fn!==double) {
  //   console.log("invalid function passed in parameter");
  //   return resultArray;
  // }

  for (let i=0;i<array.length;i++) {
    resultArray.push(fn(array[i]));
  }

  return resultArray;
}

console.log("[0, 1, 2, 3] =>"+map([0, 1, 2, 3],double));
console.log("[1,4,9] =>"+map([1,4,9],double));
console.log("[] =>"+map([],double));
console.log("[] =>"+map([],[].length));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };

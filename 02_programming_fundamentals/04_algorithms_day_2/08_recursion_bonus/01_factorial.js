// A factorial is the multiplication of a number by all numbers
// preceding it until 1.
// For instance, fact(5) = 5 * 4 * 3 * 2 * 1 = 120
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number or
// with something else than a number.
//
// Remember that you can call `fact` inside of itself


function fact(n) {
  if (n>1 && n%1 ===0) {
    return n*fact(n-1);
  } else if (n<0 || isNaN(n) || n%1 !==0) {
    return null;
  } else if (n===1) {
    return 1;
  } else if (n===0) {
    return 1;
  }

}

console.log("fact 5 =>"+fact(5));
console.log("fact 0 =>"+fact(0));
console.log("fact -1 =>"+fact(-1));
console.log("fact 1 =>"+fact(1));
console.log("fact 3 =>"+fact(3));
console.log("fact blabla =>"+fact("blabla"));
console.log('fact 0 =>'+fact('0'));
console.log("fact 3.14 =>"+fact(3.14));


// do not remove this line, it is for tests
module.exports = fact;

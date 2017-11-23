// ## Decreasing Iteration on arrays
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let stdout = "";

for (let i=litteralDigits.length-1; i>=0 ; i=i-1) {
  stdout = stdout + litteralDigits[i] + " ";
}

console.log(stdout);

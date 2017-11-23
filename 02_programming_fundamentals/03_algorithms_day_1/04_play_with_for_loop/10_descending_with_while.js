// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];

let stdout = "";
let i=litteralDigits.length-1;

while (i>=0) {
  stdout = stdout + litteralDigits[i] + " ";
  i--;
}

console.log(stdout);

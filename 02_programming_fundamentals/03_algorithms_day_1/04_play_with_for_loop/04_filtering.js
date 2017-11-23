// ## Iteration on arrays with filter
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let stdout = "";

for (let i=0; i<litteralDigits.length;i = i+2) {
  stdout = stdout + litteralDigits[i] + " ";
}

console.log(stdout);

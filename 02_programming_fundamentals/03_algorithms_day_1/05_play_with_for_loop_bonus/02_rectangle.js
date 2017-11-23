// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```
let stdout = "";

for (let i=0;i<10;i++) {
  for (let j=0;j<10;j++) {
    stdout=stdout+"*";
  }
  stdout = stdout + "\n";
}

console.log(stdout);

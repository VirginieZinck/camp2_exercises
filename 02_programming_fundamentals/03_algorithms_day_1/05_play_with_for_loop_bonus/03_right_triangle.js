// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```

let stdout = "";

for (let i=0;i<5;i++) {

  for (let j=0;j<i+1;j++) {
    stdout=stdout+"*";
  }

  console.log(stdout);
  stdout = "";

}

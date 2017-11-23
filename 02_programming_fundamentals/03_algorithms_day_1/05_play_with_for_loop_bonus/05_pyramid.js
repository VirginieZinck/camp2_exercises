// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let stdout = "";

for (let i=0;i<4;i++) {

  for (let j=4;j>i;j--) {
    stdout = stdout + " ";
  }

  stdout = stdout + "*";

  for (let k=0;k<i+i;k++) {
    stdout=stdout+"*";
  }

  for (let j=4;j>i;j--) {
    stdout = stdout + " ";
  }

  stdout = stdout + "\n";

}

console.log(stdout);

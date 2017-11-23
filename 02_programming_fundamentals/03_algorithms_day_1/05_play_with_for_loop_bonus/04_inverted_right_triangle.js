// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```


let stdout = "";

for (let i=0;i<5;i++) {

  for (let j=0;j<i;j++) {
    stdout = stdout + " ";
  }

  for (let k=5;k>i;k--) {
    stdout=stdout + "*";
  }

  console.log(stdout);
  stdout = "";
}

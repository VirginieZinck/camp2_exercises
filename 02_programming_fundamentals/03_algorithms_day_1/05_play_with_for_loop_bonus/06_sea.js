// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```
let stdout = "";

for (let i=0;i<9;i++) {
  for (let j=0;j<30;j++) {

    if ((i===2-1 && j===25-1) || (i===9-1 && j===7-1)) {
      stdout = stdout + "X";
    }
    else if ((i===4-1 && j===6-1) || (i===7-1 && j === 18-1)) {
      stdout = stdout + "0";
    }
    else {
      stdout = stdout + "*";
    }

  }
  stdout = stdout + "\n";
}

console.log(stdout);

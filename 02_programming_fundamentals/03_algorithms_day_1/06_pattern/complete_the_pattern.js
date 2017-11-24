// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇


//54321 i = 5 et j = 5 à 1
//5432  i = 4 et j = 5 à 2
//543
//54
//5



let stringout = "";

for (let i=numberOfLine; i>0;i--) {

  for (let j=numberOfLine; j>numberOfLine-i; j--) {
    stringout = stringout + j;
  }

  stringout = stringout + "\n";
}

console.log(stringout);

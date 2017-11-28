// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩

function isColorful(number) {

  let isColor = true;
  const strNumber = number.toString();
  let combinaisons = [];

  //get digits
  for (let i=0;i<strNumber.length;i++) {
    combinaisons.push(strNumber[i]);
  }
  console.log(combinaisons);

  //get pairs
  let pair;

  for (let i=0;i<strNumber.length;i++) {
    if (i>0) {
      combinaisons.push(strNumber[i-1]+strNumber[i]);
    }
  }
  console.log(combinaisons);

  //get trios
  for (let i=0;i<strNumber.length;i++) {
    if (i>1) {
      combinaisons.push(strNumber[i-2]+strNumber[i-1]+strNumber[i]);
    }
  }
  console.log(combinaisons);

  //add number itself
  if (strNumber.length===4) {
    combinaisons.push(strNumber);
    console.log(combinaisons);
  }

  //convert array with its products
  const productsArray = combinaisons.map(
    function calcProduct(str) {
      let product = 1;
      for (let i=0;i<str.length;i++) {
        product = product*parseInt(str[i],10);
      }
      console.log(product);
      return product.toString();
    }
  );
  console.log(productsArray);

  for (let i=0;i<productsArray.length;i++) {
    for (let j=0;j<productsArray.length;j++) {
      if (i!==j && productsArray[i]===productsArray[j]) {
        isColor = false;
      }
    }
  }
  console.log("Is followin number colorful ?  " + number + "=>" + isColor);
  return isColor;

}

isColorful(3245);

isColorful(10);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;

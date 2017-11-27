// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  // Your code here
  const str = number.toString();
  let resultStr="";
  let square;

  for (let i=0;i<str.length;i++) {
    square = str[i]*str[i];
    resultStr = resultStr + square.toString();
  }
  const result = parseInt(resultStr);
  return result;
}


console.log("9 => " + squareDigits(9));
console.log("99 => " + squareDigits(99));
console.log("9129 => " + squareDigits(9129));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;

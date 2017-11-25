// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]


function pickEvenNumbers(value) {
  let isEven = (value%2 === 0);
  return isEven;
}

function pickOddNumbers(value) {
  let isOdd = (value%2 !== 0);
  return isOdd;
}

function filter(array, fn) {
  // Your code here
  const resultArray = [];

  if (fn !==pickEvenNumbers && fn !==pickOddNumbers) {
    console.log("vous avez passé une fonction inconnue en paramètre : "+fn);
    return resultArray;
  }

  for (let i=0; i<array.length;i++) {

    if (fn === pickEvenNumbers) {
      if (pickEvenNumbers(array[i])) {
        resultArray.push(array[i]);
      }
    }
    if (fn ===pickOddNumbers) {
      if (pickOddNumbers(array[i])) {
        resultArray.push(array[i]);
      }
    }
  }

  return resultArray;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16];
const returnTestArray = filter(testArray,pickEvenNumbers);
console.log(returnTestArray);

// do not remove this line, it is for tests
module.exports = filter;

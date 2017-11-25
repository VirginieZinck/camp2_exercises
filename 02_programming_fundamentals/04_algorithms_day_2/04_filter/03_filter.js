// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]



function pickEvenNumbers(value) {
  return (value%2 === 0);
}

function pickOddNumbers(value) {
  return (value%2 !== 0);
}

function filter(array, fn) {

  let resultArray = [];

  if (fn !==pickEvenNumbers && fn !==pickOddNumbers) {
    console.log("vous avez passé une fonction inconnue en paramètre : "+fn);
    return resultArray;
  }

  resultArray=array.filter(fn);
  return resultArray;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16];
const returnTestArray = filter(testArray,pickEvenNumbers);
console.log(returnTestArray);

// do not remove this line, it is for tests
module.exports = filter;

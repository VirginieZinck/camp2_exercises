// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]


function filter(array, str) {

  const resultArray = [];
  let isEven;

  if (str !=="even" && str !=="odd") {
    console.log("vous avez passé un mauvais paramètre : "+str);
    return resultArray;
  }

  for (let i=0; i<array.length;i++) {

    isEven=(array[i]%2 === 0);

    if (str ==="even" && isEven===true) {
      resultArray.push(array[i]);
    } else if (str ==="odd" && isEven===false) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16];
const returnTestArray = filter(testArray,"blabla");
console.log(returnTestArray);

// do not remove this line, it is for tests
module.exports = filter;

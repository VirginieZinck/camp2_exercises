// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.


function range(start,end) {

  const resultArray=[];
  const arraySize = Math.abs(end - start) + 1;

  for (let i=0 ; i<arraySize ; i++) {

    if (start<end) {
      resultArray.push(start+i);
    } else {
      resultArray.push(start-i);
    }
    
  }
  console.log(resultArray);
  return resultArray;
}


range(7,2);

range(3,6);


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;

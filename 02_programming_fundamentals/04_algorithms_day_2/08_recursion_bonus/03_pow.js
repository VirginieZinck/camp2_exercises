// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

function pow(number, power) {
  let result = 1;

  for (let i=0; i<power; i++) {
    result = number*result;
  }
  console.log(`pow(${number},${power}) = ${result}`);
  return result;
}

pow(2,8);

// do not remove this line, it is for tests
module.exports = pow;

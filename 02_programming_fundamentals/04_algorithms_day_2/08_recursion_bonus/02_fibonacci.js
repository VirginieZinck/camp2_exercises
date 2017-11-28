// In mathematics, the Fibonacci numbers are the numbers in the
// following integer sequence, called the Fibonacci sequence,
// and characterized by the fact that every number after
// the first two is the sum of the two
// preceding ones : 0, 1, 1, 2, 3, 5, 8, 13, 21...
//
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number or
// with something else than a number.
//
// Implement a `fibo` function that takes an argument n and returns
// the n'th value of the sequence.
//
// Remember that you can call `fibo` inside of itself
// even several times


function fibo(index) {
  // your code here

  let value;
  if (index<0 || isNaN(index) || index%1 !==0) {
    console.log(`Function called with invalid argument ${index}`);
    return null;
  } else {
    if (index===1) {
      value = 0;
    }
    if (index===2) {
      value = 1;
    }
    if (index>2) {
      value = fibo(index-1)+fibo(index-2);
    }
    return value;
  }
}

for (let i = 0; i<30;i++) {
  console.log(`fibo ${i} => ${fibo(i)}`);
}

// do not remove this line, it is for tests
module.exports = fibo;

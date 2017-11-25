// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"



function joinArray(array,separator) {

  function cumul(accum,value,index) {
    if (index!==array.length-1) {
      return accum+value+separator;
    } else {
      return accum+value;
    }
  }

  return array.reduce(cumul,"");

}

console.log("[\"zero\", \"one\", \"two\"] =>" + joinArray(["zero", "one", "two"]," - "));
console.log(joinArray(["A", "B", "C"], " ~ "));
console.log("[] =>" + joinArray([]," - "));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;

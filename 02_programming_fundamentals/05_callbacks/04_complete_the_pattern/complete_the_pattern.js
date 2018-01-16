// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// ```

function pattern(size) {
  // Your code here

  let resultStr = "";

  if (size < 1) {
    return "";
  }

  for (let i=0;i<size;i++) {

    for (let j=0;j<i+1;j++) {
      resultStr = resultStr + (i+1).toString();
    }

    if (i!==size-1) {
      resultStr = resultStr + "\n";
    }
  }

  console.log(resultStr);
  return resultStr;
}

pattern(5);
pattern(11);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;

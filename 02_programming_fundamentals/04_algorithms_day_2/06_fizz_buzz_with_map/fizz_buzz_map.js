/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function convert(val) {
  let newValue;
  let restDivBy3=val%3;
  let restDivBy5=val%5;


  if (restDivBy3===0 && restDivBy5===0) {
    newValue = "FizzBuzz";
  } else if (restDivBy3!==0 && restDivBy5===0) {
    newValue = "Buzz";
  } else if (restDivBy3===0 && restDivBy5!==0) {
    newValue = "Fizz";
  } else {
    newValue = val;
  }
  return newValue;
  
}

function fizzBuzz(list) {

  const newList = list.map(convert);
  console.log(newList);
  return newList;

}


const testList = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16];
fizzBuzz(testList);

module.exports = fizzBuzz;

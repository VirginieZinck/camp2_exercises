// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  // Your code here

  let sortedArray = [];
  let didInsert;

  for (let i =0;i<unsortedArray.length;i++) {

    didInsert = false;

    if (i===0) {
      sortedArray.push(unsortedArray[i]);
      console.log("1st index, I do a push");
      console.log("unsortedArray"+unsortedArray);
      console.log("sortedArray"+sortedArray);

    } else {

      let j=0;

      while (didInsert===false && j<sortedArray.length) {

        if (unsortedArray[i]<sortedArray[j]) {
          //la valeur est plus petite que la valeur de l'index actuel
          sortedArray.splice(j,0,unsortedArray[i]);
          didInsert = true;
          console.log("value is smaller than current index : I do a splice");
          console.log("unsortedArray"+unsortedArray);
          console.log("sortedArray"+sortedArray);

        }
        j++;
      }

      if (didInsert === false) {
        sortedArray.push(unsortedArray[i]);
        console.log("value is greater than last index : I do a push");
        console.log("unsortedArray"+unsortedArray);
        console.log("sortedArray"+sortedArray);

      }
    }
  }
  return sortedArray;
}


sort([24, 7, 9, 72, -8]);


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;

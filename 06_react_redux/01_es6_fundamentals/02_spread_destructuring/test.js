
function copyReplace(array, from, to, elements) {
  return [...array.slice(0,from),...elements,...array.slice(to,array.length-1)];
}


console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

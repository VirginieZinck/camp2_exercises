
function isNotNull(value) {
  return value !== null;
}

function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
}


module.exports = {
  isNotNull: isNotNull,
  flattenArray: flattenArray
};

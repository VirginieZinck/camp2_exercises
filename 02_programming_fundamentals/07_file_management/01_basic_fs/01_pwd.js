const path = require("path");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"


//equivalent du pwd en command
function pwd() {
  return path.resolve();
}

console.log(pwd());

module.exports = pwd

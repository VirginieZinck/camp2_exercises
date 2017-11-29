// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require('fs');



//equivalent du rm en command
function deleteFile(fileName) {

  fs.unlink(fileName, function(error) {
    if (error) {
      console.warn(error)
      return false;
    } else {
      console.log(`Deleted file ${fileName} !`)
      return true;
    }
  });
}

//deleteFile("myNewFile.txt");
//deleteFile("testDir");

module.exports = deleteFile

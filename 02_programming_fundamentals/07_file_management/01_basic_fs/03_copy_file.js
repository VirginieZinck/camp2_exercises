// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require('fs');



// copyPaste d'un fichier
function copyPaste(sourceFilename, targetFilename) {

  fs.readFile(sourceFilename, function (error,data) {
    if (error) {
      console.warn(error);
      return false;

    } else {
      console.log("File read !");
      console.log("fileContent" + data);

      fs.writeFile(targetFilename,data, function (error) {
        if (error) {
          console.warn(error);
          return false;
          
        } else {
          console.log("File copied !");
          return true;

        }
      });
    }
  });
}

//copyPaste("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myFileToCopy.txt",
//"../myCopiedFile.txt");


module.exports = copyPaste;

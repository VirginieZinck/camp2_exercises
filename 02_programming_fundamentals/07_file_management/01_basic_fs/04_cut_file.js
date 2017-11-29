// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require('fs');


function cutPaste(sourceFilename, targetFilename) {

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
          deleteFile(sourceFilename);
          return true;
        }
      });
    }
  });
}

//cutPaste("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myFileToCopy.txt",
//"../myCopiedFile.txt");

module.exports = cutPaste;

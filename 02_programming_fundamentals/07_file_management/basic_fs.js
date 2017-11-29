const fs = require('fs');
const path = require("path");


//equivalent du pwd en command
function pwd() {
  return path.resolve();
}

console.log(pwd());

//equivalent du rm en command
function deleteFile(fileName) {

  fs.unlink(fileName, function(error) {
    if (error) {
      console.warn(error)
    } else {
      console.log(`Deleted file ${fileName} !`)
    }
  });
}

//deleteFile("myNewFile.txt");


// copyPaste d'un fichier
function copyPaste(sourceFilename, targetFilename) {

  fs.readFile(sourceFilename, function (error,data) {
    if (error) {
      console.warn(error);
    } else {
      console.log("File read !");
      console.log("fileContent" + data);

      fs.writeFile(targetFilename,data, function (error) {
        if (error) {
          console.warn(error);
        } else {
          console.log("File copied !");
        }
      });
    }
  });
}

//copyPaste("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myFileToCopy.txt",
//"../myCopiedFile.txt");

function cutPaste(sourceFilename, targetFilename) {

  fs.readFile(sourceFilename, function (error,data) {
    if (error) {
      console.warn(error);
    } else {
      console.log("File read !");
      console.log("fileContent" + data);

      fs.writeFile(targetFilename,data, function (error) {
        if (error) {
          console.warn(error);
        } else {
          console.log("File copied !");
          deleteFile(sourceFilename);
        }
      });
    }
  });
}

//cutPaste("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myFileToCopy.txt",
//"../myCopiedFile.txt");

function touch(fileName) {

  if (!fs.existsSync(fileName)) {

    //file doesn't exist
    fs.writeFile(fileName,"", function (error) {
      if (error) {
        console.warn(error);
      } else {
        console.log("New file created !");
      }
    });
  } else {

    //file does exist, so we just change its dates
    const currentTime = new Date()
    fs.utimes(fileName,currentTime,currentTime, function (error) {
      if (error) {
        console.warn(error);
      } else {
        console.log("File access & modified date changed !");
      }
    });
  }
}

touch("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myNewFile.txt");

// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.


const fs = require('fs');



function touch(fileName) {

  if (!fs.existsSync(fileName)) {

    //file doesn't exist
    fs.writeFile(fileName,"", function (error) {
      if (error) {
        console.warn(error);
        return false;
      } else {
        console.log("New file created !");
        return true;
      }
    });
  } else {

    //file does exist, so we just change its dates
    const currentTime = new Date()
    fs.utimes(fileName,currentTime,currentTime, function (error) {
      if (error) {
        console.warn(error);
        return false;
      } else {
        console.log("File access & modified date changed !");
        return true;
      }
    });
  }
}

touch("/Users/Virginie/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/myNewFile.txt");

module.exports = touch;

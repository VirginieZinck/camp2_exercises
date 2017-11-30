const path = require("path");
const fs = require("fs");
const readline = require("readline");

let formattedList = [];


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

function displayList(path) {

  console.log(path+"\n");
  let unformattedList = fs.readdirSync(path);
  unformattedList.splice(0,0,"..");

  // format list of files & directories in an array of objects
  formattedList = unformattedList.map( function (fileName) {
    let fileObject;

    if (fs.statSync(path+"/"+fileName).isDirectory()) {
      fileObject = {
        filePath:path,
        file:`${fileName}/`,
        type:"Directory"
      };
      return fileObject;

    } else if (fs.statSync(path+"/"+fileName).isFile()) {
      fileObject = {
        filePath:path,
        file:fileName,
        type:"File"
      };
      return fileObject;
    }
  });

  //display formatted list of files or Directory
  for (let i=0;i<formattedList.length;i++) {
    console.log(`${i}. ${formattedList[i].file}`);
  }
}


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function chooseAction(fileObject) {

  reader.question("\nChoose an action (open/copy/move)! =>", (input) => {
    let index = -1;

    for (let i=0;i<formattedList.length;i++) {
      if (fileObject.file===formattedList[i].file) {
        //index found
        index = i;
      }
    }

    if (input==="open") {
      const data = fs.readFileSync(formattedList[index].filePath+"/"+formattedList[index].file,"utf8");
      console.log("\nFile content: \n" + data +"\n");
      chooseNumber(fileObject.filePath);

    } else if (input==="copy") {
      reader.question("\nEnter name of copied file! =>", (targetFile) => {
        copyPaste(formattedList[index].file, targetFile);
      });

    } else if (input==="move") {
      reader.question("\nEnter new name of file! =>", (targetFile) => {
        cutPaste(formattedList[index].file, targetFile);
      });

    } else {
      console.log("Invalid choice !");
    }
  });
}

function chooseNumber(path) {

  displayList(path);

  reader.question("\nChoose a number ! =>", (input) => {

    let newPath;
    let inputInt = parseInt(input,10);
    let numberFound = false;

    for (let i=0;i<formattedList.length;i++) {
      if (inputInt ===i) {
        numberFound = true;

        if (formattedList[i].type==="File") {
          //number found & it is a file
          chooseAction(formattedList[i])
          chooseNumber(path);

        } else {

          //number found & it is a Directory
          newPath = `${formattedList[i].filePath}/${formattedList[i].file}`
          chooseNumber(newPath);
        }
      }
    }

    if (!numberFound) {
      console.log("\nInvalid Choice! \n");
      chooseNumber(path);
    }
  });
}

chooseNumber(path.resolve());

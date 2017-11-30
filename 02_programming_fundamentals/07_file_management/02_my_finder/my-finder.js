const path = require("path");
const fs = require("fs");
const readline = require("readline");

let formattedList = [];


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


function askQuestion(path) {

  displayList(path);

  reader.question("\nChoose a number ! =>", (input) => {

    let newPath;
    let inputInt = parseInt(input,10);
    let numberFound = false;

    for (let i=0;i<formattedList.length;i++) {
      if (inputInt ===i) {
        numberFound = true;

        if (formattedList[i].type==="File") {
          //number found & it is a file : on affiche le contenu du fichier
          console.log("\nFile content: \n" + fs.readFileSync(formattedList[i].filePath+"/"+formattedList[i].file,"utf8")+"\n");
          askQuestion(path);

        } else {
          //number found & it is a Directory
          newPath = `${formattedList[i].filePath}/${formattedList[i].file}`
          askQuestion(newPath);
        }
      }
    }

    if (!numberFound) {
      console.log("\nInvalid Choice! \n");
      askQuestion(path);
    }
  });
}

askQuestion(path.resolve());

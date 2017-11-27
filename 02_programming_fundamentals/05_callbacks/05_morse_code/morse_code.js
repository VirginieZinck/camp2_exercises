// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

function decodeMorse(morse) {
  // Your code here

  let letterInMorse = "";
  let decodedMsg = "";
  let isSeparator = [];

  for (let i=0;i<morse.length;i++) {

    isSeparator[i]=false;

    if ((morse[i]===" " && morse[i-1] !== " " && i>1) ||
        (morse[i]===" " && morse[i-1] === " " && isSeparator[i-1] === false)) {
      isSeparator[i] = true;
    }

    if (isSeparator[i]===false) {
      letterInMorse = letterInMorse + morse[i];
    }

    if (isSeparator[i]===true || i===morse.length-1) {

      if (letterInMorse.trim()!=="") {
        decodedMsg = decodedMsg + MORSE_CODE[letterInMorse];
      } else {
        decodedMsg = decodedMsg + letterInMorse;
      }
      console.log(decodedMsg);
      letterInMorse="";
    }
  }

  console.log(decodedMsg);
  return decodedMsg;
  //".... . -.--   .--- ..- -.. .") === "HEY JUDE"
}

decodeMorse(".... . -.--   .--- ..- -.. .");

decodeMorse("  ");

decodeMorse("....   ");
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;

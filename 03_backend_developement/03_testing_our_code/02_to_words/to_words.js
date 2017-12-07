function toWords(sentence) {

  let formattedSentence;

  if ((sentence ===null) ||
      (sentence ===undefined)) {
    formattedSentence = "";
  } else {
    formattedSentence = sentence.toString();
  }

  const allWords = formattedSentence.split(/[.?!,;\- :]+/);

  return allWords.filter(word => word !== "");
}

console.log(toWords(""));
module.exports = toWords;

const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");
const OAuth = require("OAuth");
const request = require("request");

const TwitterOAuth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

const watsonUsername = process.env.WATSON_USERNAME;
const watsonPassword = process.env.WATSON_PASSWORD;
const watsonAuth = "Basic " + new Buffer(watsonUsername + ":" + watsonPassword).toString("base64");
const watsonUrl = process.env.WATSON_URL;
console.log(watsonUrl);


//function pour fetch les 20 derniers twitter (user) callback on resut array
function fetchTweetsFromUser(twitterUser) {
  //request(twitter)
  const twitterUrl = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${twitterUser}`;
  console.log(`Emotional analysis of twitter account: ${twitterUser}`);
  TwitterOAuth.get(
    twitterUrl,
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    processTwitterAPIResult
  );
}

function processTwitterAPIResult(error, data) {
  if (error) {
    console.log(error);
  } else {
    const tweetsArray=JSON.parse(data);
    const TweetsString= convertTweetsInOneString(tweetsArray);
    console.log("Last tweets extract... \n\n"+TweetsString.substr(0,300)+"\n");
    fetchSentimentsForString(TweetsString);
  }
}

// function pour filtrer le tableau pour ne garder que le texte et ne garder qu'une seule grande string
function convertTweetsInOneString(tweetsArray) {
  const TweetsInOneString = tweetsArray.map(tweet => tweet.text).join("");
  return TweetsInOneString;
}

// appeler watson avec cette string pour récupérer l'humeur
function fetchSentimentsForString(string) {

  const uri = encodeURI(watsonUrl + "/v1/analyze?version=2017-02-27&features=emotion&text=" + string);
  request.get(
    {
      url: uri,
      headers: { "Authorization": watsonAuth }
    },
    processWatsonAPIResult
  );
}


function processWatsonAPIResult(error, response, result) {
  if (error) {
    console.log("error:", error);
  } else {
    const resultObject = JSON.parse(result);
    const output = "sadness : "+ Math.round(resultObject.emotion.document.emotion.sadness*100)+"%\n"+
                   "joy     : "+ Math.round(resultObject.emotion.document.emotion.joy*100)+"%\n"+
                   "fear    : "+Math.round(resultObject.emotion.document.emotion.fear*100)+"%\n"+
                   "disgust : "+Math.round(resultObject.emotion.document.emotion.disgust*100)+"%\n"+
                   "anger   : "+Math.round(resultObject.emotion.document.emotion.anger*100)+"%\n";
    console.log(output);
    return output;
  }
}

fetchTweetsFromUser("CNN");

module.exports = {
  TwitterOAuth: TwitterOAuth,
  NaturalLanguageUnderstandingV1: NaturalLanguageUnderstandingV1,
  fetchTweetsFromUser: fetchTweetsFromUser,
  convertTweetsInOneString: convertTweetsInOneString,
  fetchSentimentsForString: fetchSentimentsForString,
  processTwitterAPIResult: processTwitterAPIResult,
  processWatsonAPIResult: processWatsonAPIResult,
  request:request
};

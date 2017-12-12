const OAuth = require("OAuth");
const request = require("request");

const twitterPayload = {
  requestUrl: process.env.TWITTER_REQUEST_URL,
  accessUrl: process.env.TWITTER_ACCESS_URL,
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
};

const watsonPayload = {
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  url: process.env.WATSON_URL
};

watsonPayload.auth = "Basic " + new Buffer(watsonPayload.username + ":" + watsonPayload.password).toString("base64");

const oauth = new OAuth.OAuth(
  twitterPayload.requestUrl,
  twitterPayload.accessUrl,
  twitterPayload.consumerKey,
  twitterPayload.consumerSecret,
  "1.0A", null, "HMAC-SHA1"
);

function getTweets(account, oauth, twitterPayload, callback, callbackPayload = {}) {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${account}`,
    twitterPayload.accessToken,
    twitterPayload.accessSecret,

    (error, data) => {
      if (error) {
        console.log("Twitter Error: " + JSON.stringify(error));
      } else {
        callback(JSON.parse(data), callbackPayload, (feelings) => console.log(feelings));
      }
    }
  );
}

function getFeelings(text, watsonPayload, callback) {
  const textNLP = text.map((tweet) => tweet.text).join("\n");
  const uri = encodeURI(watsonPayload.url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + textNLP);

  request({ url: uri, headers: { "Authorization": watsonPayload.auth } }, (error, response, body) => {
    if (error) {
      console.log("IBM Request Error: " + error);
    } else {
      const parsedBody = JSON.parse(body);
      if (parsedBody.error !== undefined) {
        console.log("IBM Parse Error: " + parsedBody.error);
      } else {
        const emotions = parsedBody.emotion.document.emotion;
        callback(emotions);
      }
    }
  });
}

// getTweets("KvelerKhan", oauth, twitterPayload, getFeelings, watsonPayload);

module.exports = {
  getTweets: getTweets,
  getFeelings: getFeelings
};

const twitson = require("./index");

const fakeFeelings = {"anger": 0.044105, "disgust": 0.114401, "fear": 0.051475, "joy": 0.66067, "sadness": 0.174379};

const fakeTweets = [{
  "created_at": "Thu Apr 06 15:28:43 +0000 2017",
  "entities": {
    "hashtags": [],
    "symbols": [],
    "urls": [{
      "display_url": "cards.twitter.com/cards/18ce53wg…",
      "expanded_url": "https://cards.twitter.com/cards/18ce53wgo4h/3xo1c",
      "indices": [94, 117],
      "url": "https://t.co/XweGngmxlP"
    }],
    "user_mentions": [{
      "id": 2244994945,
      "id_str": "2244994945",
      "indices": [3, 14],
      "name": "TwitterDev",
      "screen_name": "TwitterDev"
    }]
  },
  "id": 850007368138018800,
  "id_str": "850007368138018817",
  "text": "RT @TwitterDev: 1/ Today we're sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP",
  "truncated": false
}];

test("getFeelings should get result through request", done => {
  jest.unmock("OAuth");
  expect.assertions(1);

  twitson.getFeelings(["Lorem ipsum"], {}, result => {
    expect(result).toEqual(fakeFeelings);
    done();
  });
});

test("getTweets should get result through OAuth", done => {
  jest.mock("./__mocks__/OAuth.js");

  expect.assertions(1);

  const OAuth = require("OAuth");
  const oauth = new OAuth.OAuth();

  twitson.getTweets("Lorem", oauth, {}, result => {
    expect(result).toEqual(fakeTweets);
    done();
  }, {});
});

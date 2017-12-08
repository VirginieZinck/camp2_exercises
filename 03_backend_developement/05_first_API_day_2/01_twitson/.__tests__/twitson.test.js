const twitson = require("../twitson");

const twitArray=[
  { created_at: 'Fri Dec 08 14:01:30 +0000 2017',
    id: 939132835851653100,
    id_str: '939132835851653120',
    text: 'A "Texas Christmas miracle"\n\nSnow in south Texas? Yes, you read that right https://t.co/TYwXKV20Xh \n\nIt\'s snowing a… https://t.co/FXm3d5LXiG',
    truncated: true,
    entities: { hashtags: [], symbols: [], user_mentions: [], urls: [Array] },
    source: '<a href="http://www.socialflow.com" rel="nofollow">SocialFlow</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user:
     { id: 759251,
       id_str: '759251',
       name: 'CNN',
       screen_name: 'CNN',
       location: '',
       description: 'It’s our job to #GoThere & tell the most difficult stories. Join us! For more breaking news updates follow @CNNBRK  & Download our app 📲https://t.co/Xgo5kjIt8c',
       url: 'http://t.co/IaghNW8Xm2',
       entities: [Object],
       protected: false,
       followers_count: 38688548,
       friends_count: 1116,
       listed_count: 130218,
       created_at: 'Fri Feb 09 00:35:02 +0000 2007',
       favourites_count: 1470,
       utc_offset: -18000,
       time_zone: 'Eastern Time (US & Canada)',
       geo_enabled: true,
       verified: true,
       statuses_count: 160002,
       lang: 'en',
       contributors_enabled: false,
       is_translator: false,
       is_translation_enabled: true,
       profile_background_color: '323232',
       profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/515228058286952449/zVfUxqPl.jpeg',
       profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/515228058286952449/zVfUxqPl.jpeg',
       profile_background_tile: false,
       profile_image_url: 'http://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_normal.png',
       profile_image_url_https: 'https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_normal.png',
       profile_banner_url: 'https://pbs.twimg.com/profile_banners/759251/1508752874',
       profile_link_color: '004287',
       profile_sidebar_border_color: '000000',
       profile_sidebar_fill_color: 'EEEEEE',
       profile_text_color: '000000',
       profile_use_background_image: false,
       has_extended_profile: false,
       default_profile: false,
       default_profile_image: false,
       following: false,
       follow_request_sent: false,
       notifications: false,
       translator_type: 'regular' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 87,
    favorite_count: 159,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en' },
  { created_at: 'Fri Dec 08 13:49:07 +0000 2017',
    id: 939129718519095300,
    id_str: '939129718519095296',
    text: 'Anheuser-Busch is getting Tesla\'s trucking party started with an order for 40 of its new electric semi-trucks… https://t.co/S5hcwCFpNy',
    truncated: true,
    entities: { hashtags: [], symbols: [], user_mentions: [], urls: [Array] },
    source: '<a href="http://www.socialflow.com" rel="nofollow">SocialFlow</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user:
     { id: 759251,
       id_str: '759251',
       name: 'CNN',
       screen_name: 'CNN',
       location: '',
       description: 'It’s our job to #GoThere & tell the most difficult stories. Join us! For more breaking news updates follow @CNNBRK  & Download our app 📲https://t.co/Xgo5kjIt8c',
       url: 'http://t.co/IaghNW8Xm2',
       entities: [Object],
       protected: false,
       followers_count: 38688548,
       friends_count: 1116,
       listed_count: 130218,
       created_at: 'Fri Feb 09 00:35:02 +0000 2007',
       favourites_count: 1470,
       utc_offset: -18000,
       time_zone: 'Eastern Time (US & Canada)',
       geo_enabled: true,
       verified: true,
       statuses_count: 160002,
       lang: 'en',
       contributors_enabled: false,
       is_translator: false,
       is_translation_enabled: true,
       profile_background_color: '323232',
       profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/515228058286952449/zVfUxqPl.jpeg',
       profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/515228058286952449/zVfUxqPl.jpeg',
       profile_background_tile: false,
       profile_image_url: 'http://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_normal.png',
       profile_image_url_https: 'https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_normal.png',
       profile_banner_url: 'https://pbs.twimg.com/profile_banners/759251/1508752874',
       profile_link_color: '004287',
       profile_sidebar_border_color: '000000',
       profile_sidebar_fill_color: 'EEEEEE',
       profile_text_color: '000000',
       profile_use_background_image: false,
       has_extended_profile: false,
       default_profile: false,
       default_profile_image: false,
       following: false,
       follow_request_sent: false,
       notifications: false,
       translator_type: 'regular' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 130,
    favorite_count: 311,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en' }]

const TweetsString = twitArray[0].text+twitArray[1].text;

const WatsonResponse = `{
  "usage": {
    "text_units": 1,
    "text_characters": 373,
    "features": 1
  },
  "language": "en",
  "emotion": {
    "document": {
      "emotion": {
        "sadness": 0.49725,
        "joy": 0.07611,
        "fear": 0.342978,
        "disgust": 0.092521,
        "anger": 0.171947
      }
    }
  }
}`;

const watsonOutput = "sadness : 50%\njoy     : 8%\nfear    : 34%\ndisgust : 9%\nanger   : 17%\n";


test("It shoud convert tweets texts into a unique string", function() {
  const result = twitson.convertTweetsInOneString(twitArray);
  expect(result).toBe(TweetsString);
});

test("it should fetch last tweets from a user", () => {
  const logSpy = jest.spyOn(twitson.TwitterOAuth, 'get').mockImplementation();

  twitson.fetchTweetsFromUser("CNN");

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CNN",
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    twitson.processTwitterAPIResult);
  logSpy.mockRestore()
});

test("it should fetch sentiments from a text", () => {
  const logSpy = jest.spyOn(twitson.request, "get").mockImplementation();
  twitson.fetchSentimentsForString("hey man, you are the best!");
  expect(logSpy).toHaveBeenCalledTimes(1);
  logSpy.mockRestore()
});

test("It shoud format Watson output nicely", function() {
  const result = twitson.processWatsonAPIResult(null,null,WatsonResponse);
  expect(result).toBe(watsonOutput);
});

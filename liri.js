var ConKey = 'oEudBs02MoFdZ7sZwZoR1b5R0'
var ConSec = 'KbFwWNHFrjjyQpmSy1r2vXfKfU4aAuybsFMsInEge9HoA122tl'
var ATK = '361779644-vBM6YNjSkCAi0Qe9ybZOOptP86eUdJVrGGfDuwDs'
var ATS = 'sk3Sooq9dxAnJkDp5VLuVbaMkSawltxenbtTTh9xqiuyy'



var twitter = require('twitter');
var keys = require('./keys.js');
//console.log(keys.twitterKeys.access_token_secret);

var client = new twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
client.get('statuses/user_timeline', function(error, tweets, response) {
  if(error) throw error;
  //console.log(tweets[0].text);  

// tweets.length = 20 so the for loops 20 iterations. we int said i = 0 and as long as i is less than 20 (whis is tweets.length) so as long as i is less than 20 we will console long tweets.text that will give us each indivual tweet.
 for (var i = 0; i < tweets.length; i++) {
  	console.log (tweets[i].text);
  } 
  //console.log(response);  // Raw response object. 
});
//console.log(client);

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});

console.log(process.argv[2]);
var request = require("request");
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// body is local to the request function and only define with in the request function
//body will return undefinw with in the return function or global space
// Then create a request to the queryUrl
// error, response, and body are parmaters
request(queryUrl, function(error, response, body) {
	//line 31 is saying if their is no error and the response.status code exacuate the code below
	if(!error && response.statusCode === 200)
  console.log(JSON.parse(body))
});



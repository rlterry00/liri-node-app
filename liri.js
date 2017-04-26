var Twitter = require("twitter");

var keys = require("./keys.js");


var keyList = keys.twitterKeys;

var options = { screen_name: 'black_dev_',
                count: 20 };


var request = require("request");

var client = new Twitter(keyList);






var imdb = require("imdb-api");

var Spotify = require("spotify-web-api-node");

var spotifyApi = new Spotify();



var command = process.argv[2];

var movieName = process.argv[3];

switch (command) {
	case "my-tweets":
	client.get('statuses/user_timeline', options, function(error, tweets, response) {
  for (var i = 0; i < tweets.length ; i++) {
    console.log(tweets[i].text);
  }

});
	
	break;

	//no spaces use dashes in movie name in node

	case "movie-this":
	imdb.getReq({ name: movieName}, (err, things) => {
    var movie = things;
    console.log(movie.title + "\n" + movie._year_data + "\n" +
    movie.rating + "\n" + movie.country + "\n" + movie.languages + "\n" + movie.plot +
    "\n" + movie.actors);

});


	break;

	// case "spotify-this-song":
	// spotifyApi.searchTracks('love')
 //  .then(function(data) {
 //    console.log(data.body.name);
 //  }, function(err) {
 //    console.error(err);
 //  });

 //  break;

	
}
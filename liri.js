// Make it so liri.js can take in all of the following commands:
// 1. my-tweets
// 2. spotify-this-song
// 3. movie-this
// 4. do-what-it-says

// BONUS
// In addition to logging the data to your terminal/bash window, 
// output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

// var keys = require('./keys.js');
// var ombdb = require('./omdb.js');
// var tweets = require('./tweets.js');
// var says = require('./says.js');
var spot = require('./spotSearch.js');
var nodeArgs = process.argv;

if (nodeArgs[2] === 'spotify-this-song'){
	var query = nodeArgs[3]
	spot.spotSearch(query);
} 



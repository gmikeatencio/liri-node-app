// 3. node liri.js movie-this '<movie name here>'
// 		- This will output the following information to your terminal/bash window:

// 				1. Title of the movie.
// 				2. Year the movie came out.
// 				3. IMDB Rating of the movie.
// 				4. Country where the movie was produced.
// 				5. Language of the movie.
// 				6. Plot of the movie.
// 				7. Actors in the movie.
// 				8. Rotten Tomatoes Rating.
// 				9. Rotten Tomatoes URL.
// 				10. If the user doesn't type a movie in, 
//				the program will output data for the movie 'Mr. Nobody.'
// var tit = "basketball";
// var url = "http://www.omdb.com/?t=" + tit + "&y=&plot=short&r=json"

// var request = require('request');
// request.get(url, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     // Show the HTML for the Google homepage.
//     console.log(body) 
//   }
// })
var omdbApi = require('omdb-client');
 
var params = {
    query: 'Terminator',
    year: 2012
}
omdbApi.get(params, function(err, data) {
   console.log(data) // process response... 
});
// Make it so liri.js can take in all of the following commands:
// 1. my-tweets
// 2. spotify-this-song
// 3. movie-this
// 4. do-what-it-says

// What Each Command Should Do
// 1. node liri.js my-tweets
// 		-show your last 20 tweets 
//		-and when they were created at in your terminal/bash window.
//
// 2. node liri.js spotify-this-song '<song name here>'
// 		- show the following information about the song in your terminal/bash window
// 				1.Artist(s)
// 				2.The song's name
// 				3. A preview link of the song from Spotify
// 				4. The album that the song is from
// 				5. if no song is provided then your program will default to
// 				   "The Sign" by Ace of Base

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

// 4. node liri.js do-what-it-says

// 		- Using the fs Node package, 
// 		- LIRI will take the text inside of random.txt 
// 		- and then use it to call one of LIRI's commands.

// 		- It should run spotify-this-song for "I Want it That Way," 
//		- as follows the text in random.txt.
// 		- Feel free to change the text in that document to test out the 
//		- feature for other commands.
//
// BONUS
// In addition to logging the data to your terminal/bash window, 
// output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.




var keys = require('./Keys.js');
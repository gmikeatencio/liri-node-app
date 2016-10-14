// 2. node liri.js spotify-this-song '<song name here>'
// 		- show the following information about the song in your terminal/bash window
// 				1.Artist(s)
// 				2.The song's name
// 				3. A preview link of the song from Spotify
// 				4. The album that the song is from
// 				5. if no song is provided then your program will default to
// 				   "The Sign" by Ace of Base

// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
  
    console.log(err)
 
    // Do something with 'data' 
});
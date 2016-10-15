// 2. node liri.js spotify-this-song '<song name here>'
// 		- show the following information about the song in your terminal/bash window
// 				x1. Artist(s)
// 				x2. The song's name
// 				x3. A preview link of the song from Spotify
// 				x4. The album that the song is from
// 				5. if no song is provided then your program will default to
// 				   "The Sign" by Ace of Base

// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 
var spotify = require('spotify');

function getItAll(data){
	getArtists(data)
 	getSongsName(data)
 	getPreview(data)
 	getAlbum(data)
	}
function getArtists(data){
	console.log("ARTISTS: " + data.tracks.items[0].artists[0].name)
	}
function getSongsName(data){
	console.log("SONG NAME: " + data.tracks.items[0].name)
	}
function getPreview(data){
	console.log("PREVIEW LINK: " + data.tracks.items[0].preview_url)
	}
function getAlbum(data){
	console.log("ALBUM " + data.tracks.items[0].album.name)
	}
function spotSearch(query){
		spotify.search({ type: 'track', query: query }, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    }
		    if (data.tracks.items[0] == undefined){
		    	console.log("Don't know that one.. Try this instead")
		    	spotSearch("The Sign")
		    }
		 	else getItAll(data)
		});
	}


var query = "Hsdfsdfsdff";
spotSearch(query)
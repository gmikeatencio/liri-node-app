// 2. node liri.js spotify-this-song '<song name here>'
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

module.exports = {
    spotSearch: function(query){
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
};
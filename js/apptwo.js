'use strict'


$(document).ready(function(){

function displayPhotoAlbum(photos) {	
		//get photos album 
		var htmlString ='';

		var albumId= photos[1].albumName.charAt(0);
		var albumString = '<p id= "' + albumId  + '"> </p>'; 
		$('#imageGallery').append(albumString);
		var headerString = "<h3>" + photos[1].albumName + "</h3>";
		$('#' + albumId).append(headerString);
		//label album
		
		//for each photo in the album
		var imgStrings ='';

		for (var idx = 0; idx < photos.length; idx++) {
			//get image src
			var imageSrc = 'https://farm' + photos[idx].farm + '.staticflickr.com/' + photos[idx].server
			+ '/' + photos[idx].id + '_' + photos[idx].secret +  '_q.jpg';
			imgStrings = imgStrings+ '<img class="img-responsive" src="' + imageSrc + ' " alt="' + photos[idx].id + '">';
			//append li element to ul
			
		};
		$('#' + albumId).append(imgStrings);
}

function openPhoto() {
	
}

	var apiKey = '769390df99785d3372c1709fa68e6edc';
	var userId= '129665272@N05';
	var albumUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key='+ apiKey +'&user_id='+ userId +'&format=json&&jsoncallback=?';
	var albums =[];
	
	$.getJSON(albumUrl)
		.done(function(data) {
    		$.each(data.photosets.photoset, function (idx, set) {
				var setId = set.id;
				var albumPhotosUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id='+setId+ '&format=json&&jsoncallback=?';
				var photoAlbum =[];
				$.getJSON(albumPhotosUrl) 
					.done(function(data){
						$.each(data.photoset.photo, function(i, photo) {
							photoAlbum.push({
								albumName: set.title._content,
								picName: photo.title._content,
								id: photo.id,
								secret: photo.secret,
								server: photo.server,
								farm: photo.farm
							});
						})
						albums.push({
    						name: set.title._content,
    						description: set.description._content,
    						id: set.id,
    						photos: set.photos,
    						photoAlbum: photoAlbum
    					});
    					displayPhotoAlbum(photoAlbum);
					})
					.fail (function(error){
						console.log(error);
					});
			})  
		})
		.fail(function(error) {
			console.log(error);
		}); 
	// end of json
}); //end of document ready



'use strict'


$(document).ready(function(){
	var photosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?id=129665272@N05&lang=en-us&format=json&jsoncallback=?'; 
	$.getJSON(photosUrl)
		.done(function(data) {

    	// Start putting together the HTML string
    	var htmlString = "";
    
    	// Now start cycling through our array of Flickr photo details
    	$.each(data.items, function(i,item){
    		// I only want the ickle square thumbnails
       	 	var sourceSquare = item.media.m;
       	 	debugger;
        
        	// Here's where we piece together the HTML
        	htmlString += '<li><a href="' + item.link + '" target="_blank">';
        	htmlString += '<img title="' + item.title + '" src="' + sourceSquare;
        	htmlString += '" alt="'; htmlString += item.title + '" />';
        	htmlString += '</a></li>';
    		}); // end of each call
    
    		// Pop our HTML in the #images DIV
    		$('#images').html(htmlString);
    
    	// Close down the JSON function call
	})




})
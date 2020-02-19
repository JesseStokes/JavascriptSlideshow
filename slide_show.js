$(document).ready(function() {
	// create an array of the slide images
	var image, imageCounter = 0, imageCache = [];
	$("#slides img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCache.length] = image;
		imageCounter++;
   	});
	
	// Start slide show
	var imageCounter = 0;
	var nextImage, nextCaption;
    var  timer = setInterval(
        function () {
        	$("#slides alt, #slide").fadeOut(1000,
				function() {
					imageCounter = (imageCounter + 1) % imageCache.length;
		        	nextImage = imageCache[imageCounter];
		        	nextCaption = nextImage.title;
			    	$("#slide").attr("src", nextImage.src).fadeIn(1000);
				    $("#caption").text(nextCaption.title).fadeIn(1000);		
				}        	
        	);
        },
    	3000);
    
});
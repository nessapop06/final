// $(window).load(function(){
// 	$("#overlay").fadeOut();
// }, 3000);



var currentImage = 0;
window.setInterval(function () {
// hide the current image 
$('#slider img').eq(currentImage).fadeOut();

if( currentImage < $("#slider img").length - 1) {
currentImage = currentImage +1;
}
	else {
		currentImage = 0
	}
	

//show the next image 
$('#slider img').eq(currentImage).fadeIn();

}, 1000);
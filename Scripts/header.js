$(document).ready(function() {

	$(window).scroll(function() {
          if ($(window).scrollTop() > 475) {

            $("nav").show().addClass("nav2");
           
          
        } else {
            $("nav").hide();
        }

});


var currentImage = 0;
window.setInterval(function () {
// hide the current image 
$('#slider img').eq(currentImage).fadeOut();

if( currentImage < $("#slider img").length - 1) {
currentImage = currentImage +1;
}
	else {
		currentImage = 0;
	}
	

//show the next image 
$('#slider img').eq(currentImage).fadeIn();

}, 3000);



   $("#x").hide();
  $("#rsvp-modal-yes").hide();
  $("#rsvp-modal-no").hide();
  $(".sm-button").click (function() {
	  if ($('#yes').is(':checked')){
	    $("#rsvp-modal-yes").fadeIn("slow");
		 $("#x").fadeIn("slow");
		$("body").addClass("noscroll");
	  }
	  else{
		  $("#rsvp-modal-no").fadeIn("fast");
		  $("#x").fadeIn("slow");
		$("body").addClass("noscroll");
	  }

  });
$("#x").click (function() {
	    $("#rsvp-modal-yes").fadeOut("slow");
		$("#rsvp-modal-no").fadeOut("slow");
		$("#x").fadeOut("slow");

		$("body").removeClass("noscroll");


  });

  


});
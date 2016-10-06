          $(document).ready(function() {

 $(window).scroll(function() {
          if ($(window).scrollTop() > 475) {

            $("nav").addClass("nav2");
             $("#lore").attr('class', 'logo-sm');
           
          
        } else {
            $("nav").removeClass("nav2");
  $("#lore").attr('class', 'logo');
        }

});
});
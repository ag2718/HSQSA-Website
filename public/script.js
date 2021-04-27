$(document).ready(function() { 
    AOS.init({ once: true }); 
});

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000, function(){
   
        window.location.hash = this.hash;
      });
    }
  });
});

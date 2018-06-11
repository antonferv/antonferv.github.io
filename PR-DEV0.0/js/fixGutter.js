$(window).resize(function() {
    var width = $(window).width();
    if (width < 600){
      $(".jsFix").removeClass("nogutter");
    }
    else{
      $(".JSChecknp").addClass("nogutter");
    }
  });
  $(window).resize();
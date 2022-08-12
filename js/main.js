(function ($) {
    "use strict";

  
    $(window).scroll(function () {
      var windowhight = $(window).scrollTop();
  
      if (windowhight > 10) {
        $("header").addClass("header-background");
        $("header").addClass("header-color");
        $(".nav").addClass("header-color");
      } else {
        $("header").removeClass("header-background");
        $("header").removeClass("header-color");
        $(".nav").removeClass("header-color");
      }
    });
    $(window).load(function() {
        // executes when complete page is fully loaded, including all frames, objects and images
        alert("full webpage is loaded");
       });
  })(jQuery);
  
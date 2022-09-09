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

    if (windowhight > 5500) {
      $("header").hide();
    } else {
      $("header").show();
    }
  });

  $("#some-element").loading();


  $("#loading-custom-overlay").loading({
    overlay: $("#custom-overlay"),
  });
})(jQuery);

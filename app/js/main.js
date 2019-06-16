$('.main-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>'
  });

 // Menu button
 (function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();

///Drop menu
$(function(){
  $('.colapse-menu-button .c-hamburger').on('click',function(){
    $('header .order_block-2').slideToggle();
  });
});

// Hidden menu
var menu = $('header .menu'); 
$(window).resize(function(){
    var wid = $(window).width();
    if(wid > 570 && menu.is(':hidden')) {
        menu.removeAttr('style');
    } 
});   
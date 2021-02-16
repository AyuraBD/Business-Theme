$(document).ready(function(){
	// client slider
  $("#home .home-slider").slick({
	  items:1,
	  nav:true,
	  dots:false,
	  loop:true,
	  infinite:true,
		arrows:true,
		speed:400,
		autoplay:true,
		cssEase:'linear'
  });
 });
	/*----Smooth scrooling-----*/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Scroll To Top
  jQuery(window).scroll(function(){
	  if (jQuery(this).scrollTop() > 300) {
	    jQuery('.scrollToTop').fadeIn();
	  } else {
	    jQuery('.scrollToTop').fadeOut();
	  }
	});

	jQuery('.scrollToTop').click(function(){
	  jQuery('html, body').animate({scrollTop : 0},800);
	  return false;
	});


	jQuery(window).bind('scroll', function() {
		if (jQuery(window).scrollTop() > 200) {
			jQuery('#header').addClass('navbar-bg');
		} else {
			jQuery('#header').removeClass('navbar-bg');
		}
	});

	//  Preloader
  jQuery(window).load(function() { // makes sure the whole site is loaded      
    jQuery('#preloader').delay(400).fadeOut('slow'); // will fade out      
  });




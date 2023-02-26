
// Hide Navbar on Scroll //
// $(window).bind("scroll", function () {
//   var st = $(window).scrollTop();
//   var threshold = $("header").outerHeight();
//   if (st > (threshold)) {
//     $("#navbar").addClass("disappear");
//     if (st > $.lastScrollTop) {
//       var dir = "down";
//       $("#navbar").addClass("disappear");
//     } else {
//       var dir = "up";
//       $("#navbar").removeClass("disappear");
//     }
//   }
//   $.lastScrollTop = st;
// });

//Active Nav on Current Page
var i = document.location.href.lastIndexOf("/");
var current = document.location.href.substr(i+1);

    $("#navbar nav a").removeClass('menu-active');

    $("#navbar nav a[href^='"+current+"']").each(function(){
        $(this).addClass('menu-active');
    });

// Back to Top Button 
var btn = $('#top-button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//Navbar Control
var mynav = document.getElementById('navbar');
var openMenu = document.getElementById('menuOpen');
var hamburger = document.querySelector(".hamburger");
// var closeMenu = document.getElementById('menuClose');

openMenu.addEventListener('click', function (e) {
	mynav.classList.toggle('menu-slide');
  hamburger.classList.toggle("is-active");
});



// Dropdown Menu

$(function () {
	function dropdown(selectorButton, selectorTarget, selectorPlusMinus) {
		var submenu = $(selectorTarget), isPlusMinus = $(selectorPlusMinus);

		$(selectorButton).click(function (e) {
			e.preventDefault();

			if (submenu.is(":hidden")) {
				submenu.slideDown("linear");
				isPlusMinus.removeClass('collapsed');
			} else {
				submenu.slideUp("linear");
				isPlusMinus.addClass('collapsed');
			}
		});

		$(selectorButton).click(function (e) {
			e.stopPropagation();
		});

		$(window).click(function (e) {
			if (submenu.not(":hidden")) {
				submenu.slideUp("linear");
				isPlusMinus.addClass('collapsed');
			}
		});
	}

	dropdown('#navbar .drop-menu-item', '#navbar .sub-menu', '#navbar .plus-minus');
	dropdown('footer .drop-menu-item', 'footer .sub-menu', 'footer .plus-minus');

});

// Feature Banners 

var $carousel = $('#feature .slider');
var settings = {
  dots: false,
  arrows: false,
  slide: '.feature-banner',
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '100px',
  swipe: true,
  swipeToSlide: true,
  mobileFirst: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
  
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.feature-banner[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});
// Unslick Reenable //
$(window).resize(function() {
  $('#feature .slider').slick('resize');
});

$(window).on('orientationchange', function() {
  $('#feature .slider').slick('resize');
});

// Ambassador Slider - Top Page //

var $carousel = $('#ambassadors .slider');
var settings = {
  dots: false,
  arrows: false,
  slide: '.profile-wrap',
  slidesToShow: 4,
  infinite: true,
  centerMode: true,
  centerPadding: '40px',
  mobileFirst: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        slidesToShow: 6,
        infinite: true,
        centerPadding: '70px'
      }
    }
  ]
  
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.profile-wrap[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});

// Default Post Slider - Top Page //

var $carousel = $('.slide-wrap');
var settings = {
  dots: false,
  arrows: false,
  slide: '.slide-post',
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '100px',
  swipe: true,
  swipeToSlide: true,
  mobileFirst: true,
  autoplay: false,
  autoplaySpeed: 1000,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
  
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slide-post[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});
// Unslick Reenable //
$(window).resize(function() {
  $('.slide-wrap').slick('resize');
});

$(window).on('orientationchange', function() {
  $('.slide-wrap').slick('resize');
});

   
// Video Post Slide - Top Page //

var $carousel = $('.vid-slide');
var settings = {
  dots: false,
  arrows: false,
  slide: '.vid-post',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '35px',
  mobileFirst: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick"
    }
  ]
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.vid-post[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});
// Unslick Reenable //
$(window).resize(function() {
  $('.vid-slide').slick('resize');
});

$(window).on('orientationchange', function() {
  $('.vid-slide').slick('resize');
});















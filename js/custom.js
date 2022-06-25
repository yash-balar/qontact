// uitgelicht slider End
$(document).ready(function(){
  $('.tab-main-wrapper ul li').click(function(){
    $('.tab-main-wrapper li').removeClass("active");
    $(this).addClass("active");
  });
  $('.tab-main-wrapper ul li').hover(function(){
    $('.tab-main-wrapper li').removeClass("active");
    $(this).addClass("active");
  });
});

// uitgelicht slider End
$(".gewoon-nieuwsgierig").click(function(){
  $(".nieuwsgierig-main").addClass("d-block");
  $(".question-list").addClass("d-none");
});
$(".close-btn").click(function(){
  $(".nieuwsgierig-main").removeClass("d-block");
  $(".question-list").removeClass("d-none");
});

$(document).ready(function () {
  //Fixed Header Js
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
  // menu
  $(window).click(function (event) {
      if(event.target.className != "hamburger" && event.target.parentElement.className != "hamburger"){
        $(this).removeClass("is-active");
        $('.hamburger').removeClass("is-active");
        $("#menu-item,body,html").removeClass("is-active");
        $(".menu-activebg").removeClass("is-active"); 
        $(".menu-overle").removeClass("is-active"); 
      }else{
        $(this).toggleClass("is-active");
        $('.hamburger').toggleClass("is-active");
        $("#menu-item,body,html").toggleClass("is-active");
        $(".menu-activebg").toggleClass("is-active");  
        $(".menu-overle").toggleClass("is-active"); 
      }
  });
  //Menu Item Active Js
  $(".menu_listing li a").click(function () {
      $(".menu_listing a").removeClass("menu-item_active");
      $(this).addClass("menu-item_active");
  });
  // Back to top button
  $(".back_to_top").hide();
  $(window).scroll(function () {
      if ($(document).scrollTop() > 250) {
          $(".back_to_top").fadeIn(300);
      } else {
          $(".back_to_top").fadeOut(300);
      }
  });
  $(".back_to_top").click(function () {
      $("html, body").animate({
          scrollTop: 0,
      });
      return false;
  });

});

$(document).ready(function () {
  $(document).on("scroll", function(event){
       var scrollPos = $(document).scrollTop();
      $('.menu_listing li a.smooth_section').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if(refElement.position() != undefined){
              if (refElement.position().top - 125 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                  $('.menu_listing li a.smooth_section').removeClass("menu-item_active");
                  currLink.addClass("menu-item_active");
              }else{
                  currLink.removeClass("menu-item_active");
              }
          }
          
      });
  });
// Magnific popup 
  $('.popup-link').magnificPopup({type:'image'});
});
// wow animation
new WOW().init();
// custom dropdown
$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});
// Home page press slider
jQuery(document).ready(function($) {
$('.press-main-slider').owlCarousel({
  items: 3,
  loop: true,
  nav:true,
  dots:false,
  margin: 10,
  responsive: {
    1200: {
      items: 3
    },
    768: {
      items: 3,
      dots:true,
    },
    320: {
      items: 2,
      dots:true,
    }
  }
});
});

// Home page Client logo slider
jQuery(window).on('load resize',function(){
    if (jQuery(window).width() < 768) {
      setTimeout(function(){         
        jQuery(".inner-client-logo").addClass("client-logo-slider owl-carousel owl-theme");
          jQuery('.client-logo-slider').owlCarousel({
            autoplay: true,
            dots: false,
            nav: false,
            items: 4,
            autoHeight : true,
            loop:true,
            responsive: {
              0: {
                items:3,
              },
              389: {
                items: 4,
              }
            }
        });
    }, 300);
    } 
    if (jQuery(window).width() >= 768) {
        setTimeout(function(){
          jQuery('.client-logo-slider').trigger('destroy.owl.carousel');  
        }, 300);
    }
});

// Home page Client logo slider
jQuery(window).on('load resize',function(){
if (jQuery(window).width() < 768) {
  setTimeout(function(){         
    jQuery(".press-main-slider-set").addClass("press-slider owl-carousel owl-theme");
      jQuery('.press-slider').owlCarousel({
        autoplay: true,
        dots: false,
        nav: false,
        items: 2,
        autoHeight : true,
        loop:true,
        responsive: {
          0: {
            items:2,
            dots: true,
          },
          389: {
            items: 2,
            dots: true,
          }
        }
    });
}, 300);
} 
if (jQuery(window).width() >= 768) {
    setTimeout(function(){
      jQuery('.press-slider').trigger('destroy.owl.carousel');  
    }, 300);
}
});

// uitgelicht slider
jQuery(document).ready(function($) {
$('.uitgelicht-slider-set').owlCarousel({
  autoplay: true,
  dots: false,
  nav: true,
  items: 5,
  autoHeight : true,
  loop:true,
  margin: 15,
  responsive: {
    1200: {
      items: 5,
    },
    768: {
      items: 3,
    },
    320: {
      items: 2,
    }
  }
});
});
if($('#helper-window').length) {

$( "#helper-window" ).draggable();
}
$('.helper-window__btn').on('click', function () {
  console.log('sdjfklasjdklfjsdf')
  $(this).closest('#helper-window').addClass('maximized');
  $(this).prev('.close-btn').removeClass('d-none');
  $(this).addClass('d-none');
});
$('.close-btn').on('click', function () {
  $(this).addClass('d-none');
  $(this).next('.helper-window__btn').removeClass('d-none')
  $(this).closest('#helper-window').removeClass('maximized');
});
if($('#helper-window').length) {

$( "#helper-window" ).draggableTouch({useTransform:true});
}

// Realisaties en testimonials start slider
// if($('.testimonials-slider').length) {
//   $('.testimonials-slider').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     autoplay: false,
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots:true,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots:true,
//         }
//       }
//     ]
//     });
// } 
//swiper slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 90,
  autoplay:true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

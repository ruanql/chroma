//Controll scrol barra de contato no topo
$(document).ready(function () {
    var footer = $(".header-contato");
    $(window).scroll(function () {
      if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 20) && footer.is(':visible')) {
        footer.fadeOut(100);
      } else {
        footer.fadeIn(100);
      }
    });
  });
  
  //Controll menu responsivc
  (function ($) { // Begin jQuery
    $(function () { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('.responsive ul li a:not(:only-child)').click(function (e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function () {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function () {
        $('.responsive ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function () {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery);

  let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });

  /**
 *
 *  sticky navigation
 *
 */

let navbar = $(".float-contact");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".quem-somos").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

$(document).ready(function(){
  $('.montadoras').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 2
     }
  },
  {
     breakpoint: 480,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 1
     }
  }
  ]
  });
});
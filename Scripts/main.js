
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

  

  // Carousel depoimentos

  $(document).ready(function(){
    $('.depoimentos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="left-arrow"></i>',
    nextArrow: '<i class="right-arrow"></i>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: 
    [
    {
       breakpoint: 600,
       settings: {
           infinite: true,
           arrows: true,
           slidesToShow: 1
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

    // Carousel marcas

  $(document).ready(function(){
    $('.montadoras').slick({
    slidesToShow: 5,
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

     // Carousel empresas

     $(document).ready(function(){
      $('.logomarcas').slick({
      slidesToShow: 5,
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

 
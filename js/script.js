$(window).on('load', function() {
    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(0).fadeOut('slow');
  });
  
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        arrows:false,
        slidesToShow:3,
        infinite: true,
        
    });
});
$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows:false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows:false,
          infinite: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
          infinite: true,
          slidesToScroll: 1
        }
      }

    ]
  });
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
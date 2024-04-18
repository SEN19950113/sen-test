$(document).ready(function () {
    
    // swiperJQ
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
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
    });

    // SMOOTH SLIDE
    $(function(){
      $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    });

    // FADEIN
    $(function(){
      $(window).scroll(function (){
          $('.fadein').each(function(){
              let position = $(this).offset().top;
              let scroll = $(window).scrollTop();
              let windowHeight = $(window).height();
              if (scroll > position - windowHeight + 100){
                $(this).addClass('active');
              }
              if (scroll < position - windowHeight + 100){
                  $(this).removeClass('active');
                }
          });
      });
    });

    // LIGHT BOX
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })



});
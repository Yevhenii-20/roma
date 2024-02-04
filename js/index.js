$( document ).ready(function() {   

    $(".faq-item").on('click', function(event) {
        $(this).find( ".faq-item__answer" ).slideToggle();
    });



    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        asNavFor: '.home-slider__small'
      });
      $('.home-slider__small').slick({
        slidesToShow: 4,
        asNavFor: '.home-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });
    
});
$( document ).ready(function() {   

    $(".faq-item").on('click', function(event) {
        $(this).find( ".faq-item__answer" ).slideToggle();
    });

    $('.carousel-care__box').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
        ]
      });



    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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

      

      function makeTimer() {
                var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                
                //$("#hours").html(hours + "<span class='timer-title'>HR</span>");

                $("#minutes").html(minutes + "<span class='timer-title'>MIN</span>");
                $("#seconds").html(seconds + "<span class='timer-title'>SEC</span>");
                /*$("#days").html(days + "<span>Days</span>");	*/	
    
        }
    
        setInterval(function() { makeTimer(); }, 1000);
    
});
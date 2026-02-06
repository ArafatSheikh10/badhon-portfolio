$(document).ready(function(){


    // Portfolio Carousel
    $('.portfolio-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:20,
        nav: false,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        fluidSpeed: 2000,
        slideTransition: 'ease-in-out',
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


    // ====== Copyright Text Start
    document.getElementById("year").textContent = new Date().getFullYear();
    // ====== Copyright Text End

});
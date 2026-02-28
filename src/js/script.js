$(document).ready(function(){



     //===== Sticky Menu Bar Start

     window.onscroll = function() {stickyNavbar()};

     var navbar = document.querySelector(".header-area");
     
     var stickyPoint = 100;
     
     function stickyNavbar() {
       if (window.pageYOffset >= stickyPoint) {
         navbar.classList.add("sticky");
       } else {
         navbar.classList.remove("sticky");
       }
     }
     
     //===== Sticky Menu Bar End








    //==== Nav Menu Slider Start

    $('.menu_trigger').click(function(){
        $('.sidebar-menu').slideToggle();
    })

    //==== Nav Menu Slider End









    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default jump behavior

        // Get the target section's ID from the link's href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Use the scrollIntoView method with smooth behavior
        if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns the top of the section to the top of the viewport
        });
        }
    });
    });



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
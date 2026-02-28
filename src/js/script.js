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








    // Scroll 
    const navLinks = document.querySelectorAll('.nav-menu a, .sidebar-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
    
            if (targetSection) {
                const headerEl = document.querySelector('.header-area');
                const headerHeight = headerEl ? headerEl.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;
    
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
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
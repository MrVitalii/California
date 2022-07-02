$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 3500,
        responsive:{
            0:{
                items:1
            },

            1024:{
                items:1
            }
        }
    });
});


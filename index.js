$(document).ready(function(){
    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        nav:true,
        items:1,
        loop :true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });



    //  top-sale .owl-carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        response:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000: {
                items:5
            }
        }
    });
});
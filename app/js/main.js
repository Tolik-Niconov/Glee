$(function(){

     $('.slider-top__wraper').slick({
         dots: true,
         arrows: false,
         fade: true,
         autoplay: true
     });

     $('.partners__inner').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true
    });

    let Mixer = mixitup ( '.products__content' );
    let Mix = mixitup ( '.design__content' );

});
$(function(){
    $('.client_slider').slick({
        slidesToShow:1,
        prevArrow:$('.client_left-btn'),
        nextArrow: $('.client_right-btn')
    })
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 600) {
            $('.top_btn').fadeIn(200)
        } else {
            $('.top_btn').fadeOut(200)
        }
    })

    $('.top_btn').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },100)
    })
})
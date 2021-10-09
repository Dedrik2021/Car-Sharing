$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header, .menu__nav, .overlay').addClass('sticky');
        } else {
            $('.header, .menu__nav, .overlay').removeClass('sticky');
        }
    });

    $('.menu__burger').on('click', function() {
        $('.menu__box, .menu__burger, .overlay, .header').toggleClass('active')
    })

    $('.menu__burger').on('click', function() {
        $('body').toggleClass('lock');
    })

    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('body').hasClass('lock')) {
            $('body').removeClass('lock');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.header');
        if (container.has(e.target).length === 0 && $('.menu__burger, .menu__box, .overlay, .header').hasClass('active')) {
            $('.menu__burger, .menu__box, .overlay, .header').removeClass('active');
        }
    });

    $('.tabs-btn__btn').on('click', function() {
        $('.tabs-btn__btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.tabs-btn__btn--different').on('click', function() {
        $('.hero-form__date-label--different').addClass('active')
    })

    $('.tabs-btn__btn--same').on('click', function() {
        $('.hero-form__date-label--different').removeClass('active')
    })

    $('.top-picks__big').slick({
        asNavFor: '.top-picks__thumb',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    
    $('.top-picks__thumb').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn--prev"><span class="slick-btn__span slick-btn__span--prev">Prev<span/></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--next"><span class="slick-btn__span slick-btn__span--next">Next<span/></button>',
        asNavFor: '.top-picks__big',
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            },
        ]
    });
    

    $('.footer__select').styler();

    $('.hero-form__date').datepicker();
});

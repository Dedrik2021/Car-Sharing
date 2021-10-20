$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header, .menu__nav, .overlay').addClass('sticky');
        } else {
            $('.header, .menu__nav, .overlay').removeClass('sticky');
        }
    });

    $('.menu__burger').on('click', function() {
        $('.menu__box, .menu__burger, .overlay, .header').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $(document).mouseup(function (e) {
        var container = $('.menu, .auto-park');
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

    $('.auto-park__filters-btn').on('click', function() {
        $('.auto-park__filters, .overlay, .menu__burger').addClass('_active');
        $('body').addClass('lock');
    })

    $('.btn--close').on('click', function() {
        $('.auto-park__filters, .overlay, .menu__burger').removeClass('_active');
        $('body').removeClass('lock');
    })

    
    $(document).mouseup(function (e) {
        var container = $('.auto-park__inner');
        if (container.has(e.target).length === 0 && $('.auto-park__filters, .overlay, .menu__burger').hasClass('_active')) {
            $('.auto-park__filters, .overlay, .menu__burger').removeClass('_active');
        }
    });

    $('.tabs-btn__btn').on('click', function() {
        $('.tabs-btn__btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.tabs-btn__btn--different').on('click', function() {
        $('.hero-form__date--different').addClass('active')
    })

    $('.tabs-btn__btn--same').on('click', function() {
        $('.hero-form__date--different').removeClass('active')
    })

    $('.btn--range').on('click', function() {
        $('.auto-park__filters-box--range, .btn--range').toggleClass('active')
    })

    $('.btn--type').on('click', function() {
        $('.auto-park__filters-box--type, .btn--type').toggleClass('active')
    })

    $('.btn--size').on('click', function() {
        $('.auto-park__filters-box--size, .btn--size').toggleClass('active')
    })

    $('.btn--specific').on('click', function() {
        $('.auto-park__filters-box--specific, .btn--specific').toggleClass('active')
    })

    $('#accessories-ski').on('click', function() {
        $('#accessories-ski').toggleClass('active')
    })

    $('#accessories-infant').on('click', function() {
        $('#accessories-infant').toggleClass('active')
    })

    $('#accessories-toddler').on('click', function() {
        $('#accessories-toddler').toggleClass('active')
    })

    $('#accessories-chains').on('click', function() {
        $('#accessories-chains').toggleClass('active')
    })

    

    const cards = document.querySelectorAll('.auto-park .auto-park__wrapper');

    cards.forEach((card)=>{
            card.querySelector('.auto-park__label').addEventListener('click', () => {
            card.querySelector('.auto-park__label').classList.toggle('active');
        });
    })


    $('.top-picks__big-slider').slick({
        asNavFor: '.top-picks__thumb-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    
    $('.top-picks__thumb-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn--prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--next">Next</button>',
        asNavFor: '.top-picks__big-slider',
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
                    slidesToScroll: 1,
                    fade: true,
                }
            }
        ]
    });
    

    $('.footer__select, .auto-form__select, .auto-park__price').styler();

    new AirDatepicker('#hero-date1', {
        timepicker: true,
        timeformat: 'hh:mm AA',
    });

    new AirDatepicker('#hero-date2', {
        timepicker: true,
        timeformat: 'hh:mm AA',
        
    });

    dpMin = new AirDatepicker('#hero-date1', {
        onSelect({date}) {
            dpMax.update({
                minDate: date
            })
        }
    })
    
    dpMax = new AirDatepicker('#hero-date2', {
        onSelect({date}) {
            dpMin.update({
                maxDate: date,
            })
        }
    })

    new AirDatepicker('#hero-date1', {
        dateFormat(date) {
            return date.toLocaleString('ja', {
                year: 'numeric',
                day: '2-digit',
                month: 'long'
            });
        }
    })

    new AirDatepicker('#hero-date2', {
        dateFormat(date) {
            return date.toLocaleString('ja', {
                year: 'numeric',
                day: '2-digit',
                month: 'long'
            });
        }
    })
});

let dpMin, dpMax;

function openContent(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("rent-info__item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs-btn__btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
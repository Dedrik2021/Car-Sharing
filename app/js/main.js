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

    $('.tabs-btns__btn').on('click', function() {
        $('.tabs-btns__btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.tabs-btns__btn--different').on('click', function() {
        $('.hero-form__date--different').addClass('active')
    })

    $('.tabs-btns__btn--same').on('click', function() {
        $('.hero-form__date--different').removeClass('active')
    })

    $('.btn--range').on('click', function() {
        $('.btn--range').toggleClass('active')
    })

    $('.btn--type').on('click', function() {
        $('.btn--type').toggleClass('active')
    })

    $('.btn--size').on('click', function() {
        $('.btn--size').toggleClass('active')
    })

    $('.btn--specific').on('click', function() {
        $('.btn--specific').toggleClass('active')
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
    
    $('.interested__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-btn--prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--next">Next</button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        adaptiveHeight: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    window.increment = function(event) {
        var btn = event.target;
        btn.clicks = ((btn.clicks || 0) + 1) % 2;
        window.clicks = (window.clicks || 0) + btn.clicks * 2 - 1;
        document.getElementById("clicks").innerText = window.clicks;
    }

    $( ".btn--type" ).click(function() {
        $( ".auto-park__filters-box--type" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--range" ).click(function() {
        $( ".auto-park__filters-box--range" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--size" ).click(function() {
        $( ".auto-park__filters-box--size" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--specific" ).click(function() {
        $( ".auto-park__filters-box--specific" ).slideToggle( "slow", function() {
        
        });
    });
});

let dpMin, dpMax;

let tab = function () {
    let tabNav = document.querySelectorAll('.btn--info'),
        tabContent = document.querySelectorAll('.rent-info__item'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-content');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};

tab();

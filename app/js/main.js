$(function() {
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button class="header-slider__btn header-slider__btnprev slick-arrow"><svg width="58" height="15" viewBox="0 0 58 15" xmlns="http://www.w3.org/2000/svg"> <path id="left" fill="#fff" d="M58 7.5H2M2 7.5L9.5 1M2 7.5L9.5 14" stroke="#fff" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="header-slider__btn header-slider__btnnext slick-arrow"><svg width="58" height="15" viewBox="0 0 58 15" xmlns="http://www.w3.org/2000/svg"><path id="right" fill="#fff" d="M0 7.5H56M56 7.5L48.5 1M56 7.5L48.5 14" stroke="#fff" stroke-width="2"/></svg></button>',
    });

    $('#fullpage').fullpage({});
    $(window).on('resize', function() {
        if (screen.width > 1024) {
            return;
        } else {
            $.fn.fullpage.destroy('all');
        }
    });

    $('.reviews-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button class="reviews-slider__btn reviews-slider__btnprev slick-arrow"><svg width="20" height="34" viewBox="0 0 20 34" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" d="M19 1L1 17L19 33" /></svg></button >',
        nextArrow: '<button class="reviews-slider__btn reviews-slider__btnnext slick-arrow"><svg width="20" height="34" viewBox="0 0 20 34" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" d="M1 1L19 17L1 33" /></svg></button>',
        responsive: [{
            breakpoint: 501,
            settings: {
                arrows: false,
                dots: true,
            }
        }, ]
    });

    $('.form-style').styler();

    $('.menu-btn').on('click', function() {
        $('.header__menu').slideToggle();
    });

    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.catalog__item-drop').on('click', function() {
        $(this).toggleClass('catalog__item-drop--active');
        $(this).next('.catalog-item__content').slideToggle(300);
    });

    $(".tel").mask("+7(999) 999-9999");


});
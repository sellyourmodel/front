$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    }
    ;
    $('body').removeClass('loaded');

    /*$('.product-list__img').each(function(){
     var imgProduct = $(this).find('img').attr('src');
     $(this).css({'background-image':'url('imgProduct')'})
     });*/


});
function viewport() {
    var e = window,
        a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
};
$(function () {

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    $('.js-link-open').click(function () {
        var dataTarget = $(this).attr('data-target');
        $('.js-link-open').removeClass('active')
        $(this).addClass('active')
        $('.block-pof').show();
        if ($(dataTarget).is(':visible')) {
            $(this).removeClass('active')
            $('.block-pof').hide();
        } else {

            $(this).addClass('active')
            $('.block-pof').show();
        }
        if ($(dataTarget).length) {
            $('.js-open-block:not(.js-open-block-noclose)').not(dataTarget).slideUp();
            $(dataTarget).slideToggle();

        }

        return false;
    });


    $('.block-pof').click(function () {
        $('.js-open-block').slideUp();
        $('.js-link-open').removeClass('active');
        $(this).hide();
    });

    $('.lang-list__link').click(function () {
        var flag = $(this).html();
        $('.nav-list__icon').html(flag);
        $('.block-pof').hide();
        $('.lang-list').hide();
    });

    $('.tabs li a').click(function () {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        if ($('.js-hide-bg').hasClass('active')) {
            $('.content-wrap').removeClass('bg');
        } else if ($('.js-show-bg').hasClass('active')) {
            $('.content-wrap').addClass('bg');
        }
        $('.column').css('height', 'auto');
        var max_col_height = 0;
        $('.column').each(function () {
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.column').height(max_col_height);
        return false;
    });

    if ($('.styler').length) {
        $('.styler').styler();
    }

    if ($('.select2').length) {
        $('.select2').select2();
    }

    if ($('.select2-tags').length) {
        $('.select2-tags').select2({tags: true});
    }

    if ($('.js-date').length) {
        $(".js-date").datepicker({
            language: 'ru',
            dateFormat: "dd.mm.yy",
            yearRange: "-100:+0",
            firstDay: 1,
            changeMonth: true,
            changeYear: true
        });
    }

    // accordion
    $('.accordion__head').on('click', function () {
        var el = $(this);
        $(this).parents('.accordion-wrap').toggleClass('active');
        el.next('.accordion__body').slideToggle();
        el.toggleClass('open');
        return false;
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
    });

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

});
$('.header-top').append('<div class= "menu-btn"><span></span></div>');
var flagMenu = 0
$('.menu-btn').click(function () {
    if (flagMenu == 0) {
        $('.header-top').css('height', 'auto')
        $('.box-nav-list').slideDown()
        $('.menu-btn').addClass('btn-close')

        flagMenu = 1
    }
    else {
//		$('.header-top').css('height','45px')
        $('.box-nav-list').slideUp()
        $('.menu-btn').removeClass('btn-close')
        flagMenu = 0
    }
})

/*$('.navigation__title').click(function(){
 $(this).next('.navigation-list').slideToggle();
 })*/


var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    $('.content').css({/*'padding-bottom':height_footer+15, 'padding-top':height_header+10*/});
    var viewport_wid = viewport().width;
    if (viewport_wid >= 601) {
        var max_col_height = 0;
        $('.column').each(function () {
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.column').height(max_col_height);
    }


    if (viewport_wid >= 767) {
        $("header").removeClass("fixed");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("body").addClass("fixed-header");
                $("header").addClass("fixed");
                $('.nav-profile').slideUp();
            } else {
                $("body").removeClass("fixed-header");
                $("header").removeClass("fixed");
            }
            ;

        });
    }

    if ($('.slider-for').length) {
        $('.slider-for').slick("getSlick").refresh();
    }
    ;
    if ($('.slider-nav').length) {
        $('.slider-nav').slick("getSlick").refresh();
    }
    ;

    if ($('.js-hide-bg').hasClass('active')) {
        $('.content-wrap').removeClass('bg');
    } else if ($('.js-show-bg').hasClass('active')) {
        $('.content-wrap').addClass('bg');
    }


}
$(window).bind('load', handler);
$(window).bind('resize', handler);




$(function () {
    $('.slider').anythingSlider({
        theme: "sym",
        buildNavigation: true,
        buildStartStop: false,
        hashTags: false,
        onSlideComplete: function (slider) {
            $(".slider__bg .slider__bg-item.active").fadeOut().removeClass('active');
            $(".slider__bg .slider__bg-item").eq(slider.currentPage - 1).fadeIn().addClass('active');
        },
        autoPlay: true

    });
});


$(document).ready(function () {
    $('.media-tab-header .menu').on('click', function () {
        if ($('.sidebar-navigation').css('transform', '-100%)')) {
            $('.sidebar-navigation').css({
                'transform': 'translateX(0%)'
            });
            $('.overlay').css({
                'display': 'block'
            });
            $('body').css({
                'overflow': 'hidden'
            });
        }
    });

    $('.overlay').on('click', function () {
        if ($('.sidebar-navigation').css('transform', '0%)')) {
            $('.sidebar-navigation').css({
                'transform': 'translateX(-100%)'
            });
            $('.overlay').css({
                'display': 'none'
            });
            $('body').removeAttr('style');
        }
    });

    $('.parent a').on('click', function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children().next().slideUp();
    });
});
$(function () {

    //  ★スムーススクロール用
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // ★slick
    $('.portfolio_slick').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        prevArrow: "<button class='slide-arrow slide-prev'></button>",
        nextArrow: "<button class='slide-arrow slide-next'></button>",
        dots: true,
        dotsClass: "slide-dots",
        centerMode: true,
        speed: 500,
    });

    // ★ハンバーガーメニュー用
    $(".menu-btn").click(function () {
        $(this).toggleClass("open");
        $(".header_nav").toggleClass("open");
    });

    // ★topへ戻るボタン
    $('.go_top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#go_top').fadeIn();
        } else {
            $('#go_top').fadeOut();
        }
    });
    $('.go_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

});


$(window).load(() => {
    // ★スクロールしたらふわっと表示
    ScrollReveal().reveal('.srv', {
        interval: 300,
        origin: 'top',
        duration: 700,
        easing: 'ease-out',
        distance: '50px'
        // afterReveal: after1
    });
});

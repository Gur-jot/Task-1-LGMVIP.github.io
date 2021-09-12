/* SMOOTH SCROLL */

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar').removeClass('fixed-top');
    } else {
        $('#navbar').addClass('fixed-top');
    }
});


$('.carousel').carousel({
    interval: 2000
})
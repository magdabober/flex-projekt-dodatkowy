$(document).ready(function(){
    addScrolled();
});

$(window).scroll(function(){
    addScrolled();
});

function addScrolled() {
    var headerHight = $('#main-header').outerHeight();
    var actualPos = $(window).scrollTop();
    if(actualPos > headerHight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
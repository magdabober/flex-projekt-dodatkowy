$(document).ready(function () {
    addScrolled();
});

$(window).scroll(function () {
    addScrolled();
});

var animatePercentage = $('.radial-progress .inset .percentage');

function addScrolled() {
    var headerHight = $('#main-header').outerHeight();

    var teamHight = $('#main-header').outerHeight() + 3 / 4 * $('#team').outerHeight();

    var actualPos = $(window).scrollTop();

    if (actualPos > headerHight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
    if (actualPos > teamHight) {
        rotate();
        animatePercentage.fadeIn(1500);
    }
};

var transformStyle = ['transform'];

var skills = [0.9, 0.75, 0.7, 0.85];
var arraySkills = [];

var fill90 = $('.circle#web-design .fill');
var fillMask90 = $('.circle#web-design .mask.full');
var fillFix90 = $('.circle#web-design .fill.fix');

var fill75 = $('.circle#html .fill');
var fillMask75 = $('.circle#html .mask.full');
var fillFix75 = $('.circle#html .fill.fix');

var fill70 = $('.circle#graphic-design .fill');
var fillMask70 = $('.circle#graphic-design .mask.full');
var fillFix70 = $('.circle#graphic-design .fill.fix');

var fill85 = $('.circle#ui .fill');
var fillMask85 = $('.circle#ui .mask.full');
var fillFix85 = $('.circle#ui .fill.fix');

function rotate() {

    for (i = 0; i < skills.length; i++) {
        arraySkills.push(Math.floor(skills[i] * 180))
    }

    for (i in transformStyle) {

        //1st circle

        fill90.css(transformStyle[i],
            'rotate(' + arraySkills[0] + 'deg)');
        fillMask90.css(transformStyle[i],
            'rotate(' + arraySkills[0] + 'deg)');
        fillFix90.css(transformStyle[i],
            'rotate(' + arraySkills[0] * 2 + 'deg)');
        //2nd circle

        fill75.css(transformStyle[i],
            'rotate(' + arraySkills[1] + 'deg)');
        fillMask75.css(transformStyle[i],
            'rotate(' + arraySkills[1] + 'deg)');
        fillFix75.css(transformStyle[i],
            'rotate(' + arraySkills[1] * 2 + 'deg)');

        //3rd circle

        fill70.css(transformStyle[i],
            'rotate(' + arraySkills[2] + 'deg)');
        fillMask70.css(transformStyle[i],
            'rotate(' + arraySkills[2] + 'deg)');
        fillFix70.css(transformStyle[i],
            'rotate(' + arraySkills[2] * 2 + 'deg)');

        //4th circle

        fill85.css(transformStyle[i],
            'rotate(' + arraySkills[3] + 'deg)');
        fillMask85.css(transformStyle[i],
            'rotate(' + arraySkills[3] + 'deg)');
        fillFix85.css(transformStyle[i],
            'rotate(' + arraySkills[3] * 2 + 'deg)');
    }
}

// Progressbar for 08_tutor_page
var exitStatistic = true;
var scrolled = window.pageYOffset || document.documentElement.scrollTop;
$(window).scroll(function (){
    var statistic = document.getElementById('skills');
    var statisticJQ = $('#skills');
    if (statistic){
        var statisticSourceBottom = statistic.getBoundingClientRect().top + statistic.offsetHeight/2 + window.pageYOffset;
    }
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (((scrolled + $( window ).height()) > statisticSourceBottom) && exitStatistic == true) {
        $('.semi-circle-animate').each(function(index, elem){
            var thisValue = Number($(this).closest('.about-skills__circle').siblings('.psevdo-number').find('.psevdo-number__data').text());
            var animNumber = $(this).closest('.about-skills__circle').siblings('.about-skills__number');
            if (index == 0){
                var maxValue = 100;
            } else {
                var maxValue = 100;
            };
            var bar = new ProgressBar.Path(elem, {
                easing: 'linear',
                duration: 2000,
                step: function (state, bar) {
                    if (thisValue > maxValue) {
                        animNumber.text(Math.ceil(bar.value()*thisValue));
                    } else {
                        animNumber.text(Math.ceil(bar.value()*maxValue));
                    };
                }
            });
            if (thisValue > maxValue) {
                bar.animate(1.0);
            } else {
                bar.animate(thisValue/maxValue);
            };
        });

        exitStatistic = false;
        $('.title-svg').addClass('active');
        $('.range-skills__number').addClass('active');
    }
});

// scrollMagic + TweenMax animation
$(function() {
    var controller = new ScrollMagic.Controller();

    // pin menu to top
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: 'nav',
        triggerHook: 0
    })
        .setPin('nav', {pushFollowers: false})
        .setTween(TweenMax.to('nav>label', 2, {padding: "-=15px -=0"}))
        .addTo(controller);

    // parallax
    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone, scale: 1.1}, 0)
        ;
    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '100%'
    })
        .setTween(parallaxTl)
        .addTo(controller);

    // loop svg-animation for each section
    $('section').each(function(){
        var scene0 = new ScrollMagic.Scene({
            duration: '110%',
            triggerElement: this,
            triggerHook: 0.5
        })
            .setClassToggle('.title-svg', 'active_black')
            .addTo(controller);
    });

    // svg-animation for skills section
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#skills",
        triggerHook: 0.5,
        duration: '110%'
    })
        .setClassToggle('.title-svg', 'active')
        .addTo(controller);
});
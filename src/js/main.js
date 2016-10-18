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
        // $('.title-svg').addClass('active');
        $('.range-skills__number').addClass('active');
    }
});

$(function() {
    var controller = new ScrollMagic.Controller();

    // Scene 0
    var scene0 = new ScrollMagic.Scene({
        duration:  $('#resume').height(),
        triggerElement: "#resume",
        triggerHook: 0.5
    })
        .setClassToggle('.title-svg', 'active_black')
        .addIndicators({name:'resume'})
        .addTo(controller);

    // Scene 1
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#blog",
        triggerHook: 0.5,
        duration: $('#blog').height()
    })
        .setClassToggle('.title-svg', 'active_black')
        .addIndicators({name:'blog'})
        .addTo(controller);

    // Scene 2
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#contacts",
        triggerHook: 0.5,
        duration: $('#contacts').height()
    })
        .setClassToggle('.title-svg', 'active_black')
        .addIndicators({name:'contacts'})
        .addTo(controller);

    // Scene 3
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#skills",
        triggerHook: 0.5,
        duration: $('#skills').height()
    })
        .setClassToggle('.title-svg', 'active')
        .addIndicators({name:'skills'})
        .addTo(controller);
});
// Progressbar for 08_tutor_page
var exitStatistic = true;
var scrolled = window.pageYOffset || document.documentElement.scrollTop;
$(window).scroll(function (){
    var statistic = document.getElementById('tutor-statistic');
    var statisticJQ = $('#tutor-statistic');
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
    }
});
site-skills

$(document).ready(function () {
    $(".circle").circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(100 * stepValue) + '%');
    });
    $(function(){
        $('#contactForm').validate()
    })
})
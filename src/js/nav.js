var navList = [];

$(document).ready(function() {
    $("#navigator a").each(function(){
            var thisLink = $(this);
            var thisId = thisLink.attr('href');
            if (thisId !== "#"){
            var thisTarget = $(thisId);
            navList.push({
                'anchor': thisLink,
                'id': thisId,
                'target': thisTarget
            });
            thisLink.on('click', function(e) {

                e.preventDefault();
                $('html, body').animate({
                    scrollTop: thisTarget.offset().top - 210
                }, 800);

            });
        }
    });
    $('body').scrollspy({ 
        target: "#navigator",
        offset: 220
    });
    $('body').on('activate.bs.scrollspy', function () {
        console.log(this);
    });
    // Listening to page scroll
    $(window).scroll(function() {
    if ($(this).scrollTop() > 0){  
        $('header').addClass("scroll");
    } else {
        $('header').removeClass("scroll");
    }
});

});
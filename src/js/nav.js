var navList = [];

$(document).ready(function() {
    $("#navigator a").each(function(){
        var thisLink = $(this);
        var thisId = thisLink.attr('href');
        var thisTarget = $(thisId);
        navList.push({
            'anchor': thisLink,
            'id': thisId,
            'target': thisTarget
        });
        thisLink.on('click', function(e) {

            e.preventDefault();
            $('html, body').animate({
                scrollTop: thisTarget.offset().top - 200
            }, 800);

        });
    });
    $(window).on('scroll resize', function(e) {
        $.each(navList, function(e, elem) {
            var placement = elem.target[0].getBoundingClientRect();
            if( placement.top<window.innerHeight && placement.bottom>0 ) {
                history.pushState({}, '', elem.id);
                console.log('Hash: ' + elem.id);
                return false; /* Exit $.each loop */
            }
        });
    });
    // Listening to page scroll
    $(window).scroll(function() {
    if ($(this).scrollTop() > 0){  
        $('header').addClass("scroll");
    }
    else{
        $('header').removeClass("scroll");
    }
});

});
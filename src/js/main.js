var main = (function(){

    var init = function(){
        // Initializing data
        data.init();
        // Initializing modal
        modal.init();
        // Initializing lists
        list.init();
        // Initializing filters
        filter.init();
        // Initializing organizations
        orgs.init();
        sponsors.init();
        // Removing splash and showing main content
        $("#splash").remove();
        $("header, footer, main").addClass("loaded");
        $("#navigator").click("a.nav-link", function(event) {
            event.preventDefault();
            var target = $(this).attr("href").substring(1),
                zoom =  $("#"+target).offset().top;

            $('html,body').animate({
                scrollTop: zoom},
                'slow');
        });
        // Listening to page scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 10){  
                $('header.header, main').addClass("scroll");
            }
            else{
                $('header.header, main').removeClass("scroll");
            }
        });
    };

    return {
        init:init
    };

})();
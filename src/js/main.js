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
        // Removing splash and showing main content
        $("#splash").remove();
        $("header, footer, main").addClass("loaded");
        // Listening to page scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100){  
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
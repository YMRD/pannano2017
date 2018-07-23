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
        $("#navigator a.nav-link").click(function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                console.log("Scrollando para "+$(this).attr("href"));
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                scrollTop: $(hash).offset().top - 300
                }, 800, function(){
            
                // Add hash (#) to URL when done scrolling (default click behavior)
                if(history.pushState) {
                    history.pushState(null, null, hash);
                }
                else {
                    location.hash = hash;
                }
                });
            }
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
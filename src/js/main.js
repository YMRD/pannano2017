var main = (function(){

    var init = function(){
        // Initializing data
        data.init();
        // Initializing lists
        list.init();
        // Initializing filters
        filter.init();
        // Removing splash and showing main content
        $("#splash").remove();
        $("header, footer, main").addClass("loaded");
    };

    return {
        init:init
    };

})();
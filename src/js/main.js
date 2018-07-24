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
        $('body').addClass('loaded');
    };

    return {
        init:init
    };

})();
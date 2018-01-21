var modal = (function(){

    var $modal = null;

    var init = function(){
        var self = this;

        $modal = $("#modal").modal({
            show:false
        });
    };

    return {
        init:init
    };

})();
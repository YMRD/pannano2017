var modal = (function(){

    var $modal = null;

    var init = function(){
        var self = this;

        $modal = $("#modal").modal({
            show:false
        }).on("show.bs.modal", function(event, titulo){
            _preencher(titulo);
        });
    },

    _preencher = function(titulo){
        var paper = data.getPaper(titulo);
        if(paper){
            $("#paper-title").text(paper.title);
            $("#paper-authors").text(paper.authors);
            $("#paper-area").text(paper.area);
        }
    };

    return {
        init:init
    };

})();
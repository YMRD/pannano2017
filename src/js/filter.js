var filter = (function(){

    var init = function(){
        var $filters = $("input.filter"),
        self = this;

        $filters.each(function(){
            var $list = $(this).parent().parent().find("div.list-group:eq(0)");
            if($list){
                $(this).data("list", $list);
            }
        }).on("keyup", function(){
            _filtrar($(this));
        });
    };

    var _filtrar = function($elem){
        var fator = $elem.val(),
            $list = $elem.data("list");
        if(fator && $list.length) {
            $list.find("button.list-group-item").each(function(){
                if(_normalizar($(this).text()).indexOf(_normalizar(fator)) !== -1){
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else if ($list.length){
            $list.find("button.list-group-item").show();
        }
    };

    var _normalizar = function(texto){
        if(texto.normalize){
            return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        } else {
            return texto.toLowerCase();
        }
    };

    return {
        init:init,
    };

})();
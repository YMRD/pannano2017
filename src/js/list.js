var list = (function(){

    var init = function(){
        var self = this, getter;
        $("div.list-group[data-type]").each(function(){
            var type, target, $elem = $(this), dados;
            type = $elem.data("type") || "";
            target = $elem.data("target") || "";
            if(type){
                getter = data["getBy"+type[0].toUpperCase()+type.substring(1)];
                if(getter){
                    dados = getter();
                } else {
                    dados = [];
                    console.log("Não encontrado o tipo: "+type);
                }
                _carregar($elem, dados);
                $elem.on("click", "button", _clicar);
            }
        });
    },

    _carregar = function($elem, data){
        var i, content = "";

        if ($.isArray(data)){
            for (i = 0; i < data.length; i++){
                content += "<button type=\"button\" class=\"list-group-item list-group-item-action\">"+
                            data[i]+
                        "</button>";
            }
        } else if ($.isPlainObject(data)){
            for (var prop in data){
                content += "<button type=\"button\" class=\"list-group-item list-group-item-action\">"+
                    prop+
                "</button>";
            }
        }
        $elem.append(content);
    },

    _clicar = function(){
        var self = $(this),
            target = self.parent().data("target");

        if(target === "modal"){
            $('#modal').modal("show");
        } else {
            
        }

    };

    return {
        init:init
    };

})();
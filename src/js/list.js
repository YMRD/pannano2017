var list = (function(){

    var init = function(){
        var self = this, getter;
        $("div.list-group").each(function(){
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
            } else {
                $elem.parent().hide();
            }
            $elem.on("click", "button", _clicar);
        });
    },

    _carregar = function($elem, data){
        var i, content = [], $btn;

        if ($.isArray(data)){
            for (i = 0; i < data.length; i++){
                $btn = $("<button type=\"button\" class=\"list-group-item list-group-item-action\" >"+
                        "<span>"+data[i]+"</span>"+
                        "</button>");
                $btn.data("paper", data[i]);
                content.push($btn);
            }
        } else if ($.isPlainObject(data)){
            for (var prop in data){
                $btn = $("<button type=\"button\" class=\"list-group-item list-group-item-action\">"+
                    "<span>"+prop+"</span>"+
                "</button>");
                $btn.data("trabalhos", data[prop]);
                content.push($btn);
            }
        }
        $elem.empty().append(content);
    },

    _clicar = function(event){
        var $sublist,
            dados,
            target = $(this).parent().data("target");

        if(target === "modal"){
            var title = $(this).data("paper"),
                paper = data.getPaper(title);
            if(paper){
                $("#paper-title").text(paper.title);
                $("#paper-authors").text(paper.authors);
                $("#paper-area").text(paper.area);
                $("#paper-link").attr("href", paper.link);
            }
            $('#modal').modal("show");
        } else if(target === "sublist") {
            $sublist = $(this).closest("div.tab-pane").find("div.list-group.sublist");
            dados = $(event.target).data("trabalhos");
            _carregar($sublist, dados);
            $sublist.parent().show();
        }
    },

    setData = function($sublist, dados){
        var self = this;
    };

    return {
        init:init,
        setData:setData
    };

})();
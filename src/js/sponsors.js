var sponsors = (function(){

    var sponsors = [
        { nome: "Brascabos", codigo: "brascabos", formato: "jpg" },
        { nome: "FAPSawdesESP", codigo: "sawdes", formato: "png" },
        { nome: "Anton Paar", codigo: "paar", formato: "jpg" },
        { nome: "Pensabio & Malvern", codigo: "pensabio", formato: "png" },
        { nome: "SNO", codigo: "sno", formato: "jpg" },
        { nome: "RSC", codigo: "rsc", formato: "jpg" },
        { nome: "ESN", codigo: "esn", formato: "jpg" },
        { nome: "Universidad del Atlántico", codigo: "horizons", formato: "jpg" },
        { nome: "Universidad Tecnica Federico Santa Maria", codigo: "acs", formato: "png" }
    ],

    init = function(){
        var $conteudo = [], img, org, i;
        for(i = 0; i < sponsors.length; i++){
            org = sponsors[i];
            img = $("<img>").attr("src", "images/sponsors/"+org.codigo+"."+org.formato)
                  .attr("alt", "Logo "+org.nome)
                  .attr("title", org.nome)
                  .addClass("sponsor");
            $conteudo.push(img);
        }
        $("#sponsors").empty().append($conteudo);
        
    };

    return {
        init:init
    };

})();

var orgs = (function(){

    var organizations = [
        { nome: "Poli USP", codigo: "poli-usp", formato: "jpg" },
        { nome: "FAPESP", codigo: "fapesp", formato: "gif" },
        { nome: "IPEN", codigo: "ipen", formato: "jpg" },
        { nome: "CNEN", codigo: "cnen", formato: "jpg" },
        { nome: "CNPEM", codigo: "cnpem", formato: "jpg" },
        { nome: "University of Houston", codigo: "houston", formato: "png" },
        { nome: "University of Rhode Island", codigo: "rhode_island", formato: "png" },
        { nome: "Universidad del Atlántico", codigo: "atlantico", formato: "png" },
        { nome: "Universidad Tecnica Federico Santa Maria", codigo: "santa_maria", formato: "gif" }
    ],
    hosted = [
        { nome: "SIBRATEC - NANO", codigo: "sibratec", formato: "png" }
    ],
    support = [
        { nome: "FAPESP", codigo: "fapesp", formato: "gif" },
        { nome: "NSF", codigo: "nsf", formato: "jpg" }
    ],

    init = function(){
        var $conteudo = [], img, org, i;
        for(i = 0; i < organizations.length; i++){
            org = organizations[i];
            img = $("<img>").attr("src", "images/orgs/"+org.codigo+"."+org.formato)
                  .attr("alt", "Logo "+org.nome)
                  .attr("title", org.nome)
                  .addClass("organization");
            $conteudo.push(img);
        }
        $("#orgs").empty().append($conteudo);
        $conteudo = [];
        for(i = 0; i < hosted.length; i++){
            org = hosted[i];
            img = $("<img>").attr("src", "images/hosted/"+org.codigo+"."+org.formato)
                  .attr("alt", "Logo "+org.nome)
                  .attr("title", org.nome)
                  .addClass("organization");
            $conteudo.push(img);
        }
        $("#hosts").empty().append($conteudo);

        $conteudo = [];
        for(i = 0; i < support.length; i++){
            org = support[i];
            img = $("<img>").attr("src", "images/support/"+org.codigo+"."+org.formato)
                  .attr("alt", "Logo "+org.nome)
                  .attr("title", org.nome)
                  .addClass("organization");
            $conteudo.push(img);
        }
        $("#supports").empty().append($conteudo);
        
    };

    return {
        init:init
    };

})();

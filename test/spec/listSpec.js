describe("List Spec", function(){

    var spyData, spyData2;

    beforeEach(function(){
        $("<div id='fixtures'></div>").appendTo("body");
        $("#fixtures").append(
            "<div class='tab-pane'>"+
                "<div div class='modal fade' id='modal' tabindex='-1' role='dialog' aria-hidden='true'></div>"+
                "<div id='teste' class='list-group' data-target='modal' data-type='title' ></div>"+
                "<div>"+
                    "<div id='teste2' class='list-group' data-target='sublist' data-type='author'></div>"+
                "</div>"+
                "<div>"+
                    "<div id='testeSub' class='list-group sublist' data-target='modal'></div>"+
                "</div>"+
                "<div id='teste3' class='list-group' data-target='' data-type='area'></div>"+
            "</div>"
        );
        $("#modal").modal({ show: false });
        spyData = spyOn(data,"getByTitle").and.callThrough();
        spyData2 = spyOn(data,"getByAuthor").and.callThrough();
        spyData3 = spyOn(data,"getByArea").and.callThrough();
        spySetData = spyOn(list,"setData").and.callThrough();
        data.init();
        list.init();
    });

    afterEach(function(){
        $("#fixtures").empty().remove();
    });

    describe("Ao incializar", function(){

        it("deve pegar os dados referentes ao seu parâmetro 'data-type'.", function(){
            expect(spyData).toHaveBeenCalled();
            expect(spyData2).toHaveBeenCalled();
            expect(spyData3).toHaveBeenCalled();
        });

        it("deve não chamar a função se não tiver tipo definido.", function(){
            $("#fixtures").empty().append("<div id='teste' class='list-group'></div>");
            spyData.calls.reset();
            list.init();
            expect(spyData).not.toHaveBeenCalled();
        });

        it("deve criar um botão para cada item dos dados retornados, esses botões devem ter eventos de clique associados.", function(){
            expect($("#teste button").length).toEqual(237);
            expect($("#teste2 button").length).toEqual(718);
            expect($("#teste3 button").length).toEqual(8);
            expect($._data( $("#teste")[0], 'events' ).click).toBeTruthy();
            expect($._data( $("#teste2")[0], 'events' ).click).toBeTruthy();
            expect($._data( $("#teste3")[0], 'events' ).click).toBeTruthy();
        });

        it("deve esconder a lista e o wrapper dela caso ela seja do tipo 'sublist'.", function(){
            expect($("#testeSub").is(":visible")).toBe(false);
            expect($("#testeSub").parent().is(":visible")).toBe(false);
        });

    });

    describe("Ao clicar em um botão.", function(){

        it("deve chamar o show do modal de documentos caso o data-target seja 'modal'.", function(){
            var spy = spyOn($.fn,"modal");
            $("#teste button:eq(0)").click();
            expect(spy).toHaveBeenCalledWith("show");
        });

        it("deve mostrar e montar a sublista caso o data-target seja 'sublista'", function(){
            var $btn = $("#teste2 button:eq(0)").click();
            expect($("#testeSub").is(":visible")).toBe(true);
            expect($("#testeSub button").length).toEqual(1);
        });

    });

});
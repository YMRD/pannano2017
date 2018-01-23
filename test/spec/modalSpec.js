describe("modalSpec", function(){

    var spyFnModal;

    beforeEach(function(){
        spyFnModal = spyOn($.fn,"modal").and.callThrough();
        $("body").append(
            "<div id='modal'>"+
                "<span id='paper-title'></span>"+
                "<span id='paper-authors'></span>"+
                "<span id='paper-area'></span>"+
            "</div>"
        );
        modal.init();
    });

    describe("Ao inicializar", function(){

        it("deve criar o modal escondido e escutando o evento shown.bs.modal.", function(){
            expect(spyFnModal).toHaveBeenCalledWith({ show: false });
            //expect($._data($("#modal")[0], "events").show).toBeTruthy();
        });

    });

    describe("Ao abrir o modal", function(){

        var title = "Título de Teste",
            paper = {
                title:"Título de Teste",
                authors:"Autor 1; Autor 2; Author 3",
                area:"Area de Teste"
            },
            spyDataGet;

        beforeEach(function(){
            spyDataGet = spyOn(data, "getPaper").and.returnValue(paper);
            $("#modal").trigger("show.bs.modal",[title]);
        });

        /*it("deve obter os dados pelo título passado no evento.", function(){
            expect(spyDataGet).toHaveBeenCalledWith(title);
        });

        it("deve preencher com os dados retornados no paper os elementos do modal.", function(){
            expect($("#paper-title").text()).toEqual(paper.title);
            expect($("#paper-authors").text()).toEqual(paper.authors);
            expect($("#paper-area").text()).toEqual(paper.area);
        });*/

    });

});
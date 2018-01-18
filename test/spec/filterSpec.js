describe("Filter Spec", function(){

    beforeEach(function(){
        $("<div id='fixtures'></div>").appendTo("body");
        
        $("#fixtures").append("<div class='tab-pane'>"+
            "<div><input id='filter1' class='filter' /></div>"+
            "<div class='list-group' id='list1'>"+
                "<button class='list-group-item' id='btn1'>Teste</button>"+
                "<button class='list-group-item' id='btn2'>Outro</button>"+
                "<button class='list-group-item' id='btn3'>Outra</button>"+
            "</div><div><input id='filter2' class='filter' /></div>"+
        "</div>");
        filter.init();
    });

    afterEach(function(){
        $("#fixtures").empty().remove();
    });

    describe("Ao inicializar: ", function(){

        it("deve associar o evento keyup para todos os filtros.", function(){
            $("input.filter").each(function(){
                expect($._data( this, 'events' ).keyup).toBeTruthy();
            });
        });

        it("deve encontra a lista mais perto e guardar sua referência.", function(){
            expect($("#filter1").data("list").attr("id")).toEqual("list1");
        });

    });

    describe("Ao digitar (keyup): ", function(){

        it("deve mostrar tudo se está em branco.", function(){
            $("button").hide();
            $("#filter1").val("").keyup();
            expect($("#btn1").is(":visible")).toBe(true);
            expect($("#btn2").is(":visible")).toBe(true);
            expect($("#btn3").is(":visible")).toBe(true);
        });

        it("deve esconder itens que não possuam as letras digitadas e mostrar as que contiverem.", function(){
            $("#filter1").val("Te").keyup();
            expect($("#btn1").is(":visible")).toBe(true);
            expect($("#btn2").is(":visible")).toBe(false);
            expect($("#btn3").is(":visible")).toBe(false);

            $("#filter1").val("Outr").keyup();
            expect($("#btn1").is(":visible")).toBe(false);
            expect($("#btn2").is(":visible")).toBe(true);
            expect($("#btn3").is(":visible")).toBe(true);

            $("#filter1").val("Outra").keyup();
            expect($("#btn1").is(":visible")).toBe(false);
            expect($("#btn2").is(":visible")).toBe(false);
            expect($("#btn3").is(":visible")).toBe(true);
        });

        it("deve buscar independente do tamanho da letra.", function(){
            $("button").hide();
            $("#filter1").val("Te").keyup();
            expect($("#btn1").is(":visible")).toBe(true);
            expect($("#btn2").is(":visible")).toBe(false);
            expect($("#btn3").is(":visible")).toBe(false);

            $("#btn1, #btn2, #btn3").hide();
            $("#filter1").val("tes").keyup();
            expect($("#btn1").is(":visible")).toBe(true);
            expect($("#btn2").is(":visible")).toBe(false);
            expect($("#btn3").is(":visible")).toBe(false);
        });

        it("deve buscar independente de acentos (se normalize estiver disponível)", function(){
            $("button").hide();
            if("".normalize){
                $("#filter1").val("Té").keyup();
                expect($("#btn1").is(":visible")).toBe(true);
                expect($("#btn2").is(":visible")).toBe(false);
                expect($("#btn3").is(":visible")).toBe(false);
            } else {
                expect(true).toBe(true);
            }
        });


    });

});
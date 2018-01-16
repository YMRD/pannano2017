describe("Data Reader Specs", function(){

    describe("Ao ler", function(){

        beforeEach(function(){
            data.init();
        });

        it("deve separar dados por area", function(){
            var testData = data.getByArea();
            expect(Object.keys(testData).length).toEqual(8);
        });

        it("deve separar dados por autor", function(){
            var testData = data.getByAuthor();
            expect(Object.keys(testData).length).toEqual(718);
        });

        it("deve separar dados por título", function(){
            var testData = data.getByTitle();        
            expect(testData.length).toEqual(237);
        });

    });

});
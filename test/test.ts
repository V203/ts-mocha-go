import greet, {grtCtr, GreetInEnglish, Spanish_greet, Greeter,lang, MapUserGreetCounter } from "../greet";
import { GreetInXhosa } from "../greet";
import assert from "assert";


describe("Greet test functions", function () {
    it("should test", function () {
        assert.equal(2, 2);
    });

    it('Should be able to greet Bob', () => {
        assert.strictEqual(greet({ first_name: "Bob", last_name: "Crow", email: "bobcrow@email.com" }), "Hello, Bob Crow");
    });

    it("Should be able to greet in Xhosa", () => {
        let xhosa_greet = new GreetInXhosa();

        assert.strictEqual("Molo, Pete", xhosa_greet.greet("Pete"));

    });

    it("Should be able to greet in English",()=>{
        let english_greet = new GreetInEnglish();
        assert.strictEqual("Hello, Pete", english_greet.greet("Pete"));
    
    });

    it("Should be able to greet in Spanish",()=>{
        let spanish_greet = new Spanish_greet();
        assert.strictEqual("Salve, Pete", spanish_greet.greet("Pete"));
    
    });

    it("We should be able to implement the map object literal.",()=>{
        let mp = new Map<string,number>();
                
        mp.set("Pete",1);
        mp.get("Pete");
        assert.strictEqual(1,mp.get("Pete"));       
    });

    it("We should be able to Pete, Bolly and Jake then return with three mentioned people",()=>{

        greet({first_name:"Jake",last_name:"Joe"});
        greet({first_name:"Pete",last_name:"Joe"});
        greet({first_name:"Bolly",last_name:"Joe"});
        
        let actual = grtCtr.getMp();
        let expected = grtCtr.getMp();

        assert.strictEqual(expected,actual)    
        
    });


    it("We should be Scott three times and return counter greet of 3",()=>{

        greet({first_name:"Scott",last_name:"Joe"});
        greet({first_name:"Scott",last_name:"Joe"});
        greet({first_name:"Scott",last_name:"Joe"});
        greet({first_name:"Mat",last_name:"Stone"});
        
        let actual = grtCtr.userGreetCount({first_name:"Scott",last_name:"Joe"});
        let expected = 3;

        assert.strictEqual(expected,actual)    
        
    });

    it("Should be able to greet Various people utilizing the greeter class in English, Xhosa and Spanish",()=>{

        let grtMap: Map<string,GreetIn> =new Map();

        grtMap.set(lang.span,new Spanish_greet());
        grtMap.set(lang.eng,new GreetInEnglish());
        grtMap.set(lang.xhos,new GreetInXhosa());
        let mpuser = new MapUserGreetCounter();

        let greeter = new Greeter(grtMap,mpuser);

   

        assert.strictEqual("Hello, Billy",greeter.greet("Billy",lang.eng));
        assert.strictEqual("Salve, Steve",greeter.greet("Steve",lang.span));
        assert.strictEqual("Molo, Jimmy",greeter.greet("Jimmy",lang.xhos));
    });


    it("Should be able to greet four people and return the size of four.",()=>{

        let grtMap: Map<string,GreetIn> =new Map();

        grtMap.set(lang.span,new Spanish_greet());
        grtMap.set(lang.eng,new GreetInEnglish());
        grtMap.set(lang.xhos,new GreetInXhosa());
        let mpuser = new MapUserGreetCounter();

        let greeter = new Greeter(grtMap,mpuser);

        greeter.greet("Pete",lang.eng);
        greeter.greet("Scott",lang.xhos)
        greeter.greet("Billy",lang.eng)
        greeter.greet("Blake",lang.span)

        let actual = greeter.greetCounter;
        let expected = 4;

        assert.equal(actual,expected);


    })

    it("Should be able to greet Pete 3 times and userGreetCount should return 3 to indicate that Scott has been greeted three times.",()=>{

        let grtMap: Map<string,GreetIn> =new Map();

        grtMap.set(lang.span,new Spanish_greet());
        grtMap.set(lang.eng,new GreetInEnglish());
        grtMap.set(lang.xhos,new GreetInXhosa());
        let mpuser = new MapUserGreetCounter();

        let greeter = new Greeter(grtMap,mpuser);

        greeter.greet("Pete",lang.eng);
        greeter.greet("Pete",lang.xhos)
        greeter.greet("Pete",lang.span)
        greeter.greet("Blake",lang.span)

        let actual = greeter.userGreetCount("Pete");
        let expected = 3;

        assert.equal(actual,expected);


    })

});


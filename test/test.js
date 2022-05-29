"use strict";
exports.__esModule = true;
var greet_1 = require("../greet");
var assert_1 = require("assert");
// import getMp from "../greet";
describe("Greet test functions", function () {
    // it("should test", function () {
    //     assert.equal(2, 2);
    // });
    // it('Should be able to greet Bob', () => {
    //     // assert.strictEqual(greet({ first_name: "Bob", last_name: "Crow", email: "bobcrow@email.com" }), "Hello, Bob Crow will be in touch at bobcrow@email.com");
    // })
    // it("Should be able to greet in Xhosa", () => {
    //     let xhosa_greet = new GreetInXhosa();
    //     assert.strictEqual("Molo, Pete", xhosa_greet.greet("Pete"))
    // })
    // it("Should be able to greet in English",()=>{
    //     let english_greet = new GreetInEnglish();
    //     assert.strictEqual("Hello, Pete", english_greet.greet("Pete"))
    // });
    // it("Should be able to greet in Spanish",()=>{
    //     let spanish_greet = new Spanish_greet();
    //     assert.strictEqual("Salve, Pete", spanish_greet.greet("Pete"))
    // });
    // it("We should be able to implement the map object literal.",()=>{
    //     let mp = new Map<string,number>()
    //     // let grt_ctr =new Greet_counter_user ()
    //     mp.set("Pete",1)
    //     mp.get("Pete")
    //     console.log(mp.get("Pete"));
    //     console.log();
    // });
    it("We should be able to Pete, Bolly and Jake then return with three mentioned people", function () {
        var mp = new Map();
        // greet()
        // let grt_ctr =new Greet_counter_user ()
        (0, greet_1["default"])({ first_name: "Jake", last_name: "Joe" });
        (0, greet_1["default"])({ first_name: "Pete", last_name: "Joe" });
        (0, greet_1["default"])({ first_name: "Bolly", last_name: "Joe" });
        var actual = greet_1.grtCtr.getMp();
        var expected = "";
        console.log(actual);
        assert_1["default"].strictEqual(actual, expected);
    });
});

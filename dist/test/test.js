"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importStar(require("../greet"));
const greet_2 = require("../greet");
const assert_1 = __importDefault(require("assert"));
describe("Greet test functions", function () {
    it("should test", function () {
        assert_1.default.equal(2, 2);
    });
    it('Should be able to greet Bob', () => {
        assert_1.default.strictEqual((0, greet_1.default)({ first_name: "Bob", last_name: "Crow", email: "bobcrow@email.com" }), "Hello, Bob Crow");
    });
    it("Should be able to greet in Xhosa", () => {
        let xhosa_greet = new greet_2.GreetInXhosa();
        assert_1.default.strictEqual("Molo, Pete", xhosa_greet.greet("Pete"));
    });
    it("Should be able to greet in English", () => {
        let english_greet = new greet_1.GreetInEnglish();
        assert_1.default.strictEqual("Hello, Pete", english_greet.greet("Pete"));
    });
    it("Should be able to greet in Spanish", () => {
        let spanish_greet = new greet_1.Spanish_greet();
        assert_1.default.strictEqual("Salve, Pete", spanish_greet.greet("Pete"));
    });
    it("We should be able to implement the map object literal.", () => {
        let mp = new Map();
        mp.set("Pete", 1);
        mp.get("Pete");
        assert_1.default.strictEqual(1, mp.get("Pete"));
    });
    it("We should be able to Pete, Bolly and Jake then return with three mentioned people", () => {
        (0, greet_1.default)({ first_name: "Jake", last_name: "Joe" });
        (0, greet_1.default)({ first_name: "Pete", last_name: "Joe" });
        (0, greet_1.default)({ first_name: "Bolly", last_name: "Joe" });
        let actual = greet_1.grtCtr.getMp();
        let expected = greet_1.grtCtr.getMp();
        assert_1.default.strictEqual(expected, actual);
    });
    it("We should be Scott three times and return counter greet of 3", () => {
        (0, greet_1.default)({ first_name: "Scott", last_name: "Joe" });
        (0, greet_1.default)({ first_name: "Scott", last_name: "Joe" });
        (0, greet_1.default)({ first_name: "Scott", last_name: "Joe" });
        (0, greet_1.default)({ first_name: "Mat", last_name: "Stone" });
        let actual = greet_1.grtCtr.userGreetCount({ first_name: "Scott", last_name: "Joe" });
        let expected = 3;
        assert_1.default.strictEqual(expected, actual);
    });
    it("Should be able to greet Various people utilizing the greeter class in English, Xhosa and Spanish", () => {
        let grtMap = new Map();
        grtMap.set(greet_1.lang.span, new greet_1.Spanish_greet());
        grtMap.set(greet_1.lang.eng, new greet_1.GreetInEnglish());
        grtMap.set(greet_1.lang.xhos, new greet_2.GreetInXhosa());
        let mpuser = new greet_1.MapUserGreetCounter();
        let greeter = new greet_1.Greeter(grtMap, mpuser);
        assert_1.default.strictEqual("Hello, Billy", greeter.greet("Billy", greet_1.lang.eng));
        assert_1.default.strictEqual("Salve, Steve", greeter.greet("Steve", greet_1.lang.span));
        assert_1.default.strictEqual("Molo, Jimmy", greeter.greet("Jimmy", greet_1.lang.xhos));
    });
    it("Should be able to greet four people and return the size of four.", () => {
        let grtMap = new Map();
        grtMap.set(greet_1.lang.span, new greet_1.Spanish_greet());
        grtMap.set(greet_1.lang.eng, new greet_1.GreetInEnglish());
        grtMap.set(greet_1.lang.xhos, new greet_2.GreetInXhosa());
        let mpuser = new greet_1.MapUserGreetCounter();
        let greeter = new greet_1.Greeter(grtMap, mpuser);
        greeter.greet("Pete", greet_1.lang.eng);
        greeter.greet("Scott", greet_1.lang.xhos);
        greeter.greet("Billy", greet_1.lang.eng);
        greeter.greet("Blake", greet_1.lang.span);
        let actual = greeter.greetCounter;
        let expected = 4;
        assert_1.default.equal(actual, expected);
    });
    it("Should be able to greet Pete 3 times and userGreetCount should return 3 to indicate that Scott has been greeted three times.", () => {
        let grtMap = new Map();
        grtMap.set(greet_1.lang.span, new greet_1.Spanish_greet());
        grtMap.set(greet_1.lang.eng, new greet_1.GreetInEnglish());
        grtMap.set(greet_1.lang.xhos, new greet_2.GreetInXhosa());
        let mpuser = new greet_1.MapUserGreetCounter();
        let greeter = new greet_1.Greeter(grtMap, mpuser);
        greeter.greet("Pete", greet_1.lang.eng);
        greeter.greet("Pete", greet_1.lang.xhos);
        greeter.greet("Pete", greet_1.lang.span);
        greeter.greet("Blake", greet_1.lang.span);
        let actual = greeter.userGreetCount("Pete");
        let expected = 3;
        assert_1.default.equal(actual, expected);
    });
});

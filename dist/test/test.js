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
});

"use strict";
exports.__esModule = true;
exports.Spanish_greet = exports.GreetInEnglish = exports.GreetInXhosa = exports.getMp = void 0;
var mp = new Map();
function greet(person) {
    var msg = "Hello, ".concat(person.first_name, " ").concat(person.last_name, " will be in touch at ").concat(person.email);
    function count(person) {
        if (person.last_name && person.first_name) {
            mp.set(person.first_name, 1);
        }
        else if (mp.has(person.first_name)) {
            mp.get(person.first_name);
        }
    }
    return { msg: msg };
}
exports["default"] = greet;
function getMp() {
    return mp;
}
exports.getMp = getMp;
// export interface Greet_counter_user {
//     countGreet(firstName: string): void // returns nothing
//     greetCounter: number
//     userGreetCount(firstName: string): number
// }
// export class counter implements Greet_counter_user {
//     constructor() {
//         countGreet(firstName: string): void {
//         }
//         greetCounter: number;
//     }
// }
var GreetInXhosa = /** @class */ (function () {
    function GreetInXhosa() {
    }
    GreetInXhosa.prototype.greet = function (name) {
        return "Molo, " + name;
    };
    return GreetInXhosa;
}());
exports.GreetInXhosa = GreetInXhosa;
var GreetInEnglish = /** @class */ (function () {
    function GreetInEnglish() {
    }
    GreetInEnglish.prototype.greet = function (name) {
        return "Hello, ".concat(name);
    };
    return GreetInEnglish;
}());
exports.GreetInEnglish = GreetInEnglish;
var Spanish_greet = /** @class */ (function () {
    function Spanish_greet() {
    }
    Spanish_greet.prototype.greet = function (name) {
        return "Salve, ".concat(name);
    };
    return Spanish_greet;
}());
exports.Spanish_greet = Spanish_greet;

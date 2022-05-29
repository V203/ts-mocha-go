"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spanish_greet = exports.GreetInEnglish = exports.GreetInXhosa = exports.mp = exports.grtCtr = void 0;
const mp = new Map();
exports.mp = mp;
let grtCtr = {
    mp: new Map(),
    countGreet(person) {
        if (person.first_name && !mp.has(person.first_name)) {
            mp.set(person.first_name, 1);
        }
        else if (mp.has(person.first_name)) {
            let temp_count = mp.get(person.first_name);
            temp_count++;
            mp.set(person.first_name, temp_count);
        }
    },
    greetCounter() { return mp.size; },
    userGreetCount(person) {
        return mp.get(person.first_name);
    },
    getMp() {
        return mp;
    }
};
exports.grtCtr = grtCtr;
function greet(person) {
    mp;
    grtCtr.countGreet({ first_name: person.first_name, last_name: person.last_name });
    return `Hello, ${person.first_name} ${person.last_name}`;
}
exports.default = greet;
console.log(grtCtr.getMp());
class GreetInXhosa {
    greet(name) {
        return "Molo, " + name;
    }
}
exports.GreetInXhosa = GreetInXhosa;
class GreetInEnglish {
    greet(name) {
        return `Hello, ${name}`;
    }
}
exports.GreetInEnglish = GreetInEnglish;
class Spanish_greet {
    greet(name) {
        return `Salve, ${name}`;
    }
}
exports.Spanish_greet = Spanish_greet;

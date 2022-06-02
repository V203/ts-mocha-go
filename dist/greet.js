"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapUserGreetCounter = exports.lang = exports.Greeter = exports.Spanish_greet = exports.GreetInEnglish = exports.GreetInXhosa = exports.mp = exports.grtCtr = void 0;
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
class Greeter {
    greetLanguages;
    grtCtr;
    // grtCtr
    constructor(greetLanguages, grtCtr) {
        this.grtCtr = grtCtr;
        this.greetLanguages = greetLanguages;
    }
    greet(name, chosenLanguages) {
        let greetIn = this.greetLanguages.get(chosenLanguages);
        if (greetIn) {
            this.grtCtr.countGreet({ first_name: name });
            return greetIn.greet(name);
        }
        return "";
    }
    get greetCounter() {
        return this.grtCtr.greetCounter();
    }
    userGreetCount(first_name) {
        return this.grtCtr.userGreetCount({ first_name: first_name });
    }
}
exports.Greeter = Greeter;
let lang = {
    span: "span",
    eng: "english",
    xhos: "xhosa"
};
exports.lang = lang;
class MapUserGreetCounter {
    constructor() {
        this.mp = new Map();
        // this.temp_count = 0;
        // this.temp_count:number = 0;
    }
    mp;
    getMp() {
        return;
    }
    temp_count = 0;
    countGreet(person) {
        if (person.first_name && !this.mp.has(person.first_name)) {
            this.mp.set(person.first_name, 1);
        }
        else if (this.mp.has(person.first_name)) {
            var temp_count = Number(this.mp.get(person.first_name));
            temp_count += 1;
            this.mp.set(person.first_name, Number(temp_count));
        }
    }
    greetCounter() {
        return this.mp.size;
    }
    userGreetCount(person) {
        return Number(this.mp.get(person.first_name));
    }
}
exports.MapUserGreetCounter = MapUserGreetCounter;

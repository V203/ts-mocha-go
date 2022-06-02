"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
const greet_1 = require("./greet");
;
class Greeter {
    greetable;
    grtCtr;
    // grtCtr
    constructor(greetable, grtCtr) {
        this.grtCtr = grtCtr;
        this.greetable = greetable;
    }
    greet(name, lang) {
        let message = this.greetable.greet(name, lang);
        this.grtCtr.countGreet({ first_name: name });
        return message;
    }
    get greetCounter() {
        return this.grtCtr.greetCounter();
    }
    userGreetCount(first_name) {
        return this.grtCtr.userGreetCount({ first_name: first_name });
    }
}
exports.Greeter = Greeter;
class GreetInManager {
    greetLanguages;
    constructor(greetLanguages) {
        this.greetLanguages = greetLanguages;
        this.greetLanguages = greetLanguages;
    }
    greet(firstName, lang) {
        let greetIn = this.greetLanguages.get(lang);
        if (greetIn) {
            return greetIn.greet(firstName);
        }
        return "";
    }
}
let grtMap = new Map();
grtMap.set(greet_1.lang.span, new greet_1.Spanish_greet());
grtMap.set(greet_1.lang.eng, new greet_1.GreetInEnglish());
grtMap.set(greet_1.lang.xhos, new greet_1.GreetInXhosa());
let mpuser = new greet_1.MapUserGreetCounter();
// let greeter = new Greeter(grtMap,mpuser);
// greeter.greet("Pete",lang.eng);
// greeter.greet("Scott",lang.xhos)
// greeter.greet("Billy",lang.eng)
// greeter.greet("Blake",lang.span)
let greetInManager = new GreetInManager(grtMap);
console.log(greetInManager.greet("Pete", greet_1.lang.xhos));

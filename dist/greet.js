"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spanish_greet = exports.GreetInEnglish = exports.GreetInXhosa = void 0;
function greet(person) {
    return `Hello, ${person.first_name} ${person.last_name} will be in touch at ${person.email}`;
}
exports.default = greet;
// export class counter implements Greet_counter_user {
//     constructor() {
//         countGreet(firstName: string): void {
//         }
//         greetCounter: number;
//     }
// }
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

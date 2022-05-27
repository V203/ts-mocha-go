import Person from "./person";
import Greet_counter_user from "./grtCtr";

var mp = new Map<string, number>()
export default function greet(person: Person) {
    
    let msg = `Hello, ${person.first_name} ${person.last_name} will be in touch at ${person.email}`;


     function count(person: Person) {
        if (person.last_name && person.first_name) {
            mp.set(person.first_name, 1)

        } else if (mp.has(person.first_name)) {
            mp.get(person.first_name)
        }
    }

    return { msg };
}

export function getMp(){
    return mp;

}

export interface GreetIn {
    greet(name: string): string;
}

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
export class GreetInXhosa implements GreetIn {
    greet(name: string) {
        return "Molo, " + name;
    }
}

export class GreetInEnglish implements GreetIn {
    greet(name: string): string {
        return `Hello, ${name}`;
    }
}

export class Spanish_greet implements GreetIn {
    greet(name: string): string {
        return `Salve, ${name}`;
    }
}

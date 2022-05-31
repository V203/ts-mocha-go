import Person from "./person";
import { GrtCtr } from "./grtCtr";


const mp: any = new Map<string, number>()
let grtCtr: GrtCtr = {
    mp: new Map<string, number>(),
    countGreet(person: Person) {
        if (person.first_name && !mp.has(person.first_name)) {
            mp.set(person.first_name, 1)

        } else if (mp.has(person.first_name)) {

            let temp_count = mp.get(person.first_name)
            temp_count++

            mp.set(person.first_name, temp_count)

        }

    },

    greetCounter() { return mp.size },
    userGreetCount(person: Person) {
        return mp.get(person.first_name)
    },

    getMp() {
        return mp;
    }

}

export { grtCtr, mp }




export default function greet(person: Person) {

    mp
    grtCtr.countGreet({ first_name: person.first_name, last_name: person.last_name });
    return `Hello, ${person.first_name} ${person.last_name}`;
}

export interface GreetIn {
    greet(name: string): string;
}

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

export class Greeter {

    private greetLanguages:Map<string,GreetIn>;
    private grtCtr:GrtCtr
    // grtCtr
    constructor(greetLanguages:Map<string,GreetIn>,grtCtr:GrtCtr){
        this.grtCtr = grtCtr;
        this.greetLanguages = greetLanguages;
    }

    greet(name:string,chosenLanguages:string){
        let greetIn = this.greetLanguages.get(chosenLanguages);

        if(greetIn){
            this.grtCtr.countGreet({first_name:name});
            return greetIn.greet(name);

        }
        return "";
    }

    
    public get greetCounter() : number {
        return this.grtCtr.greetCounter()
    }

    userGreetCount(first_name:string): number {
        return this.grtCtr.userGreetCount({first_name:first_name});
    }
    
}


interface Language{
    span:string,
    eng:string,
    xhos:string

}

let lang:Language={
    span : "span",
    eng:  "english",
    xhos: "xhosa"
}
export {lang}

export class MapUserGreetCounter implements GrtCtr {

    constructor() {
        this.mp = new Map<string, number>()
        // this.temp_count = 0;
        // this.temp_count:number = 0;

    }
    mp: Map<string, number>;



    getMp() {
        return;
    }
    temp_count = 0;

    countGreet(person: Person) {
        if (person.first_name && !this.mp.has(person.first_name)) {
            this.mp.set(person.first_name, 1);


        } else if (this.mp.has(person.first_name)) {
            var temp_count = Number(this.mp.get(person.first_name));
            temp_count += 1;

            this.mp.set(person.first_name, Number(temp_count));            
        }

    }

    greetCounter(): number {
        return this.mp.size;

    }

    userGreetCount(person:Person): number {
        return  Number(this.mp.get(person.first_name));
        
    }

}

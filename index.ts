// import { GrtCtr } from "./grtCtr";
// import Person from "./person";
// import { GreetIn } from "./greet";

import {MapUserGreetCounter} from "./greet"
// class MapUserGreetCounter implements GrtCtr {

//     constructor() {
//         this.mp = new Map<string, number>()
//         // this.temp_count = 0;
//         // this.temp_count:number = 0;

//     }
//     mp: Map<string, number>;



//     getMp() {
//         return;
//     }
//     temp_count = 0;

//     countGreet(person: Person) {
//         if (person.first_name && !this.mp.has(person.first_name)) {
//             this.mp.set(person.first_name, 1);


//         } else if (this.mp.has(person.first_name)) {
//             var temp_count = Number(this.mp.get(person.first_name));
//             temp_count += 1;

//             this.mp.set(person.first_name, Number(temp_count));            
//         }

//     }

//     greetCounter(): number {
//         return this.mp.size;

//     }

//     userGreetCount(person:Person): number {
//         return  Number(this.mp.get(person.first_name));
        
//     }

// }

let mop = new MapUserGreetCounter()

mop.countGreet({ first_name: "Mat" });
mop.countGreet({ first_name: "Mat" });
mop.countGreet({ first_name: "Mel" });

console.log(mop.greetCounter());

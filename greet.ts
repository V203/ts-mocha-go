import Person from "./person";
import  {GrtCtr}  from "./grtCtr";



const mp:any= new Map<string,number>()
let grtCtr:GrtCtr = {
    mp:  new Map<string,number>(),
    countGreet(person:Person){
        if(person.first_name && !mp.has(person.first_name)){
            mp.set(person.first_name,1)
                        
        }else if(mp.has(person.first_name)){
            
            let temp_count = mp.get(person.first_name)
            temp_count++

            mp.set(person.first_name,temp_count )
            
        }

    },

    greetCounter() {return mp.size},
    userGreetCount(person:Person){
        return mp.get(person.first_name)
    },

    getMp(){
        return mp;
    }
    
}

export {grtCtr,mp}




export default function greet  (person: Person)   {

    mp
    grtCtr.countGreet({first_name:person.first_name,last_name:person.last_name});

    

return `Hello, ${person.first_name} ${person.last_name}`;



}
console.log(grtCtr.getMp());




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

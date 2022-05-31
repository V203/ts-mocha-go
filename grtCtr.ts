import Person from "./person"

const mp:any= new Map<string,number>()
export  interface GrtCtr {
    mp:any
    countGreet(person: Person): void // returns nothing
    
    greetCounter(): number 
    userGreetCount(person:Person): number
    getMp():any
    // temp_count:number
    
}

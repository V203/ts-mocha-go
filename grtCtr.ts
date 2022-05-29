import Person from "./person"

const mp:any= new Map<string,number>()
export  interface GrtCtr {
    mp:any
    countGreet(person: Person): void // returns nothing
    
    greetCounter(): number 
    userGreetCount(person:Person): number
    getMp():any
    
}





// export {grtCtr,mp}


// grtCtr.countGreet({first_name:"Vuyisa",last_name:"Ndubela"});
// grtCtr.countGreet({first_name:"Vuyisa",last_name:"Ndubela"});
// grtCtr.countGreet({first_name:"Vuyo",last_name:"Ndubela"});
// grtCtr.countGreet({first_name:"Vuyo",last_name:"Ndubela"});

// console.log(grt)
// console.log(grtCtr.greetCounter())
// console.log(grtCtr.userGreetCount({first_name:"Ron",last_name:"Ndubela"}))
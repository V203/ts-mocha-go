"use strict";
// import greet,{ GreetInXhosa,GreetInEnglish,Spanish_greet, GreetIn} from "./greet";
//  let grtMap: Map<string,GreetIn> =new Map();
//  grtMap.set(lang.span,new Spanish_greet());
//  grtMap.set(lang.eng,new GreetInEnglish());
//  grtMap.set(lang.xhos,new GreetInXhosa());
//  var eng = grtMap.get(lang.eng);
//  var xhos = grtMap.get(lang.xhos);
//  var span = grtMap.get(lang.span);
//  console.log(span?.greet("Vuyisa"));
// export class Greeter {
//     private greetLanguages:Map<string,GreetIn>;
//     constructor(greetLanguages:Map<string,GreetIn>){
//         this.greetLanguages = greetLanguages;
//     }
//     greet(name:string,chosenLanguages:string){
//         let greetIn = this.greetLanguages.get(chosenLanguages);
//         if(greetIn){
//             return greetIn.greet(name);
//         }
//         return "";
//     }
// }
// let greeter = new Greeter(grtMap);
// console.log(greeter.greet("James",lang.eng));

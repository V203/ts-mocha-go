import { lang,GreetInEnglish,GreetInXhosa,Spanish_greet, MapUserGreetCounter, grtCtr } from "./greet";
import { GrtCtr } from "./grtCtr";
import Person from "./person";

export interface Greetable {
    greet(firstName:string, lang:string) : string
};

export class Greeter implements Greetable{

    private greetable:Greetable
    private grtCtr:GrtCtr
    // grtCtr
    constructor(greetable:Greetable,grtCtr:GrtCtr){
        this.grtCtr = grtCtr;
        this.greetable = greetable
    }

    greet(name:string,lang:string){
        let message = this.greetable.greet(name,lang);

        
         this.grtCtr.countGreet({first_name:name});
            
        return message;
    }

    
    public get greetCounter() : number {
        return this.grtCtr.greetCounter()
    }

    userGreetCount(first_name:string): number {
        return this.grtCtr.userGreetCount({first_name:first_name});
    }
    
}

class GreetInManager implements Greetable{
    constructor(private greetLanguages: Map<string, GreetIn>){
        this.greetLanguages = greetLanguages;
    }

    greet(firstName: string, lang: string): string {
        let greetIn = this.greetLanguages.get(lang)
        if(greetIn){
            return greetIn.greet(firstName)
        }
        return ""
        
    }
}

let grtMap: Map<string,GreetIn> =new Map();

grtMap.set(lang.span,new Spanish_greet());
        grtMap.set(lang.eng,new GreetInEnglish());
        grtMap.set(lang.xhos,new GreetInXhosa());
        let mpuser = new MapUserGreetCounter();

        // let greeter = new Greeter(grtMap,mpuser);

        // greeter.greet("Pete",lang.eng);
        // greeter.greet("Scott",lang.xhos)
        // greeter.greet("Billy",lang.eng)
        // greeter.greet("Blake",lang.span)


let greetInManager = new GreetInManager(grtMap);

console.log(greetInManager.greet("Pete",lang.xhos));



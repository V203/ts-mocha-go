export default interface Greet_counter_user {
    countGreet(firstName: string): void // returns nothing
    greetCounter: number 
    userGreetCount(firstName: string): number
}

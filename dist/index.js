"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet"));
// let grt = new greet(first_name:string,last_name:string,email:string)
let msg = (0, greet_1.default)({ first_name: "Phill", last_name: "Collins" });
console.log(msg);

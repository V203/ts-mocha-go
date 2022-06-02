"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importStar(require("@databases/pg"));
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/grtsdb';
let db = (0, pg_1.default)(connectionString);
const Fct = () => {
    const get_all_greets = async () => {
        let results;
        results = await db.query((0, pg_1.sql) `select * from greets`).finally(async () => await db.dispose());
        // console.log(results);
        return results;
    };
    db.task(async (task) => {
        const name = await task.query((0, pg_1.sql) `select * from greets`);
        console.log(name);
    });
    return {
        get_all_greets,
    };
};
let f = Fct();
let f__ = f.get_all_greets().then(data => data[2]);
console.log(f__);
;
// let pool = new Client({
//     connectionString, ssl: {
//         rejectUnauthorized: false
//     }
// });
// // pool.
// let Factory = async ()=>{
// let get_all = await ()=>{
//     return  ( (pool.query("select * from greets"))).rows
// }
// return{
//     get_all
// }
// }
// let f = Factory();
// console.log(f.get_all());

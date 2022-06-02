import createConnectionPool, { sql } from '@databases/pg';
import anyOf from "@databases/pg-typed"


const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/grtsdb';


let db = createConnectionPool(connectionString)


const Fct = () => {




    const get_all_greets = async  () => {
        let results;
      results =  await db.query(sql`select * from greets`).finally(async ()=> await db.dispose())
        // console.log(results);
        

        return results



    }


    db.task(async (task)=>{
        const name = await task.query(sql`select * from greets`)

        console.log(name);
        
    });
    
    return {
        get_all_greets,
        
    }
    
    
}


let f = Fct()


let f__ = f.get_all_greets().then(data => data[2])

console.log(  f__);

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


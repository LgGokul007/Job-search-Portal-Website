import { db } from "./createdb.js";

async function deleteRow(){

    try{

    await db.run(`DELETE FROM jbtable WHERE id = 8`)
    console.log("completed")
    }
    catch(err){
        console.log(err)
    }

}
deleteRow()
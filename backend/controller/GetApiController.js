import { db } from "../createdb.js"

export async function GetApiController (req, res){
    try{
        const data=await db.all(`SELECT * FROM data WHERE user=?`,[req.session.userId])
        console.log(data)
        res.json(data)
    }
    catch(err){
        res.status(400).json({
            "status":"failed",
            "message":"failed in api get catch"
        })
    }

   
}
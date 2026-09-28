import { db } from "../createdb.js"

export async function GetProfileController (req,res){

    try{
       const dbData=await db.get(`SELECT * FROM users WHERE id=?`,[req.session.userId])

       res.json(dbData)
    }
    catch(err){
        res.status(400).json({"status":"failed",
            "message":"failed getting into profile db"
        })
    }

}
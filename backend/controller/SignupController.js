import bcrypt from "bcryptjs"
import {db} from "../createdb.js"
import { cloudController } from "./cloudController.js"

export async function SignupController(req, res){

  try {


    const imageurl=await cloudController(req,res)

    const { username, email, password } = req.body

    const securePassword = await bcrypt.hash(password, 10)

    const isInserted = await db.run(`INSERT INTO users(username,mailid,password,profilepic) VALUES(?,?,?,?)`,[username, email, securePassword,imageurl])

    if (isInserted.changes === 0) {
      res.status(400).json({
        "status": "failed",
        "inserted": false
      })
    }

    else {

      res.json({
        "status": "success",
        "inserted": true
      })
    }
  }

  catch (err) {
    res.status(400).json({ "status": "failed" })
  }


}
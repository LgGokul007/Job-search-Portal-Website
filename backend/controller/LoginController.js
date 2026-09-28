import { db } from "../createdb.js";
import bcrypt from "bcryptjs";

export async function LoginController(req, res) {

    const { email, password } = req.body

    const user = await db.get(`SELECT * FROM users WHERE mailid=?`, [email])

    if (!user) {
       return res.status(400).json({
            "status": "failed",
            "message": "Mail id Not Exists"
        })
    }

    const passCheck= await bcrypt.compare(password,user.password)

    if(passCheck){

        req.session.userId=user.id
        return res.json({
            "status":"success",
            "login":true
        })
    }
    else{
        return res.json({
            "status":"failed",
            "login":false,
            "message":"password wrong"
        })
    }

}
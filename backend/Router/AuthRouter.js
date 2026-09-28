import express from "express"
import { SignupController } from "../controller/SignupController.js"
import { LoginController } from "../controller/LoginController.js"
import { upload } from "../middleware/upload.js"

export const AuthRouter = express.Router()

AuthRouter.post("/login", LoginController)

AuthRouter.post("/signup", upload.single("profilepic"), SignupController)

AuthRouter.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.json({
                "status": "failed",
                "message": "logout failed"
            })
        }

        res.clearCookie("connect.sid")
        res.json({
            "status": "success",
            "message": "logged out"
        })
    })
})
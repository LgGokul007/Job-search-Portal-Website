import express from "express"
import { PostApiController } from "../controller/PostApiController.js"
import { GetApiController } from "../controller/GetApiController.js"
import { GetProfileController } from "../controller/GetProfileController.js"


export const ApiRouter = express.Router()

ApiRouter.get("",GetApiController)

ApiRouter.get("/profile",GetProfileController)

ApiRouter.post("", PostApiController)
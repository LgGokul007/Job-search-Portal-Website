import express from "express"
import cors from "cors"
import { ApiRouter } from "./Router/ApiRouter.js"
import { AuthRouter } from "./Router/AuthRouter.js"
import session from "express-session"
import dotenv from "dotenv"

dotenv.config()


const PORT = 2000

const server = express()

server.use(cors({
    origin: "http://localhost:5173",
    credentials: true

}))

server.use(express.json())

server.use(session({
    secret: process.env.SECRET_VALUE,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }
}))


server.use("/api", ApiRouter)

server.use("/auth", AuthRouter)



server.listen(PORT, () => console.log("server created"))
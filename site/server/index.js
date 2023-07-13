import express from "express"
import mongoose from "mongoose"
import "dotenv-flow/config.js"
import path from "path"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

import db from './config/connectDb.js'
import authRoutes from './routes/auth.js'
import Utils from './routes/utils.js'
import { errorHandler } from './middleware/errorHandler.js'


const app = express()
db()
const port = process.env.PORT || 5000

// configurati pt express

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))
app.use(morgan("dev"))


app.use("/api", authRoutes)
app.use("/api", Utils)



// pt 
if (process.env.NODE_ENV == "production") {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, "/dist")))
    app.get("*", (req, res) => {
        res.render("index")
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api is running")
    })

}

app.use(errorHandler)




app.listen(port, () => {
    console.log(`
    Server is listening on ${port}`
    )
})
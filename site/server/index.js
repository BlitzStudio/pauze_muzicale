import express from "express"
import mongoose from "mongoose"
import "dotenv-flow/config.js"
import path from "path"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

import downloadTrackCron from './downloader/cron.js'
import db from './config/connectDb.js'
import authRoutes from './routes/auth.js'
import utilsRoutes from './routes/utils.js'
import adminRoutes from './routes/admin.js'
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
app.use("/api", utilsRoutes)
app.use("/api/admin", adminRoutes)



// pt 
if (process.env.NODE_ENV == "production") {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, "/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "/dist/index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api is running")
    })

}

app.use(errorHandler)




app.listen(port, () => {
    downloadTrackCron.start()
    console.log(`
    Server is listening on ${port}`
    )

})
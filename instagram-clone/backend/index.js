import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Connection from './database/db.js'
import userRoute from './route/userRoute.js'

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json({ limit: '50mb'}))
// app.use(cookieParser())

app.use('/api/user', userRoute)

const PORT = process.env.PORT || 8000

Connection()

app.get("/", (req,res)=>{
    res.send("Server running")
})

app.listen(PORT, () => console.log("App running at port", +PORT))
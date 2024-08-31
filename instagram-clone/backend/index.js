import express from 'express'
import cors from 'cors'
import Connection from './connection/db.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

const app = express()

dotenv.config()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json({ limit: '50mb'}))

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 8000

Connection()

app.get("/", (req,res)=>{
    res.send("Server running")
})

app.listen(PORT, () => console.log("App running at port", +PORT))
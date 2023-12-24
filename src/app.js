import express, { urlencoded } from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
app.use(cors({
    origin: process.env.CORS_ORIGINS,
    optionsSuccessStatus: 200
}))
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static("public"))
app.use(cookieParser)

export { app }
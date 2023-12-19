import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


routes(app)
export default app;
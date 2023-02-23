import express, { json } from 'express'
import { objectRouter } from "./routes/index.routes.js";
export const app = express()
app.use(json())
app.use('/api/object', objectRouter)


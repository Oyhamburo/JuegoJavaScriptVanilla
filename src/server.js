import express from "express"
import { npcRouter,objectRouter } from "./routes/index.routes.js";
import cors from 'cors'

const app = express()

// Anulo el error de CORS
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/npc",npcRouter)
app.use("/api/object",objectRouter)

const port = process.env.PORT | 8400;

app.listen(port, () => console.log(`Server running on port ${port}`))
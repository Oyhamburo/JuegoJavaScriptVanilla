import express from "express"
import passport from "passport";
import mongoose from "mongoose";
import cors from 'cors' //error de cors
import minimist from "minimist"// pasar parametros
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import { engine } from "express-handlebars";
import { createServer as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import { socketEvent } from "./socket/event.js";
import { initPassport } from "./passport/init.js";
import { sessionMongo } from "./middlewares/index.middlewares.js";
import {
    npcRouter,
    objectRouter,
    viewsRouter,
    userRouter
} from "./routes/index.routes.js";
//Parametros--
dotenv.config()
// const options = {
//     alias: {
//         "p": "PORT",
//         "m": "MODO"
//     },
//     default: {
//         "PORT": 8400,
//         "MODO": "DEV"
//     }
// }
// const { PORT, MODO } = minimist(process.argv.slice(2), options);
const PORT = process.env.PORT || 8400;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:477";

const app = express()
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
socketEvent(io)
// Anulo el error de CORS
app.use(cors())


app.use(cookieParser());
app.use(sessionMongo);
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(sessionMongo);
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport)

//Rutas
app.use("/api/npc", npcRouter)
app.use("/api/object", objectRouter)
app.use("/", viewsRouter);
// app.use("/test", userRouter);


httpServer.listen(PORT, async () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected DB", MONGO_URI);
    } catch (error) {
        console.log(`Error en conexión de Base de datos: ${error}`);
    }
})
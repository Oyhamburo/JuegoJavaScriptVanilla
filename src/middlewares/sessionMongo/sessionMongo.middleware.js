import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from 'dotenv'
dotenv.config()
const MONGO_URI = process.env.MONGO_URI || "";
export const sessionMongo = session({
  store: MongoStore.create({
    mongoUrl: MONGO_URI,
    ttl: 600,
  }),
  secret: "sh",
  resave: false,
  saveUninitialized: false,
  rolling: false,
  cookie: {
    maxAge: 600000,
  },
});

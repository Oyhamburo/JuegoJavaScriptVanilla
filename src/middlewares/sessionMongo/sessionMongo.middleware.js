import session from "express-session";
import MongoStore from "connect-mongo";
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gameDB:VwgUGc5ragezctY0@gamedb.acky3ml.mongodb.net/?retryWrites=true&w=majority";
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

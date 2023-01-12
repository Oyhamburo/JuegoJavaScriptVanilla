import { ObjectsDaoMongoDB, NPCsDaoMongoDB } from "./daos/index.dao.js"

const NPCsDao = new NPCsDaoMongoDB()
const ObjectsDao = new ObjectsDaoMongoDB()

export { NPCsDao, ObjectsDao }
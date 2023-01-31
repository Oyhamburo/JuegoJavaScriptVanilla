import { ContainerMongoDB } from "../../containers/index.container.js";
import dotevn from 'dotenv'

dotevn.config()
const { MONGO_URI } = process.env

class ObjectsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        const uri = MONGO_URI
        super(uri, 'gameProyect', 'objects')
    }
}

export { ObjectsDaoMongoDB }

import { ContainerMongoDB } from "../../containers/index.container.js";

class ObjectsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        const uri = 'mongodb+srv://gameDB:VwgUGc5ragezctY0@gamedb.acky3ml.mongodb.net/?retryWrites=true&w=majority'
        super(uri, 'gameProyect', 'objects')
    }
}

export { ObjectsDaoMongoDB }

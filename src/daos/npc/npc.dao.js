import { ContainerMongoDB } from "../../containers/index.container.js";

class NPCsDaoMongoDB extends ContainerMongoDB {
    constructor(){
        const uri =  'mongodb+srv://gameDB:VwgUGc5ragezctY0@gamedb.acky3ml.mongodb.net/?retryWrites=true&w=majority'
        super(uri, 'gameProyect','npcs')
    }
}

export {NPCsDaoMongoDB}

// VwgUGc5ragezctY0
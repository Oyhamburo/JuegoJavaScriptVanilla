import { NPCsDaoMongo } from '../index.dao.js'


const opcion = process.argv[2] || 'Mongo'

let dao
switch (opcion) {
    case 'Mongo':
        dao = new NPCsDaoMongo()
        // await dao.init()
        break

    default:
        console.log('falta DAO')
    // dao = new PersonasDaoMem()
}

class NPCsDaoFactory {
    static getDao() {
        return dao
    }
}

export { NPCsDaoFactory }
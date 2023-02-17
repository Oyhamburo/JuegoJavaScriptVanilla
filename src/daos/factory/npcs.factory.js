import NPCsDaoMongo from '../npc/npc.dao.js'


const opcion = process.argv[ 2 ] || 'Mongo'

let dao
switch (opcion) {
    case 'Mongo':
        dao = new NPCsDaoMongo()
        await dao.init()
        break
    
    default:
        console.log('falta DAO')
        // dao = new PersonasDaoMem()
}

export default class NPCsDaoFactory {
    static getDao() {
        return dao
    }
}
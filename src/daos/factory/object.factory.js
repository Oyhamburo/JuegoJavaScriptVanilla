import {ObjectsDaoMongo} from '../index.dao.js'


const opcion = process.argv[ 2 ] || 'Mongo'

let dao
switch (opcion) {
    case 'Mongo':
        dao = new ObjectsDaoMongo()
        // await dao.init()
        break
    
    default:
        console.log('falta DAO')
        // dao = new PersonasDaoMem()
}

class ObjectDaoFactory {
    static getDao() {
        return dao
    }
}

export { ObjectDaoFactory }
import { ObjectModel } from '../models/index.models.js'
import { ObjectDaoFactory } from '../daos/factory/index.factory.js'
import { asDtoObject } from '../dtos/index.dtos.js'
import { AdaptadorObjects } from '../dtos/adaptadores/index.adaptador.js'

class Repo {
    #dao

    constructor() {
        this.#dao = ObjectDaoFactory.getDao()
    }

    async getAll() {
        const objects = await this.#dao.getAll()
        return objects.map(o => new AdaptadorObjects(new ObjectModel(o)).devolver())
    }

    async getById(code) {
        const object = await this.#dao.getById(code)
        console.log('repositorio',object)
        return  new AdaptadorObjects(new ObjectModel(object)).devolver()
    }

    async create(newObject) {
        await this.#dao.create(asDtoObject(newObject))
    }

    async removeById(code) {
        const delet = await this.#dao.deleteById(code)
        return  new AdaptadorObjects(new ObjectModel(delet)).devolver()
    }

    async updateById(code, object) {
        await this.#dao.updateById(code, object)
    }
}

export { Repo as ObjectRepo }
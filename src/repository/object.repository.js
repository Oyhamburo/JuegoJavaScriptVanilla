import { ObjectModel } from '../models/index.models.js'
import { ObjectDaoFactory } from '../daos/factory/index.factory.js'
import { asDtoObject } from '../dtos/index.dtos.js'

class Repo {
    #dao

    constructor() {
        this.#dao = ObjectDaoFactory.getDao()
    }

    async getAll() {
        const objects = await this.#dao.getAll()
        // return objects.map(n => new ObjectModel(n))
        return objects
    }

    async getById(code) {
        const object = await this.#dao.getById(code)
        // return new ObjectModel(object)
        return object
    }

    async create(newObject) {
        await this.#dao.create(asDtoObject(newObject))
    }

    async removeById(code) {
        const delet = await this.#dao.deleteById(code)
        // return new ObjectModel(delet)
        return delet
    }

    async updateById(code, object) {
        await this.#dao.updateById(code, object)
    }
}

export { Repo as ObjectRepo }
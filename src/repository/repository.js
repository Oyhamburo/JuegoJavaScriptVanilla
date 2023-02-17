import NPCmodel from '../models/index.models.js'
import NPCsDaoFactory from '../daos/factory/index.factory.js'
import { NPCdto } from '../dtos/index.dtos.js'

export default class npcRepo {
    #dao

    constructor() {
        this.#dao = NPCsDaoFactory.getDao()
    }

    async getAll() {//find
        const npcs = await this.#dao.getAll()
        return npcs.map(n => new modelNPC(n))
    }

    async getById(code) {
        const dto = await this.#dao.getById(code)
        return new modelNPC(dto)
    }

    async exists(code) {
        return await this.#dao.getById(code)
    }

    async create(newNpc){
        await this.#dao.save(NPCdto(newNpc))
    }

    async removeById(code) {
        const removida = await this.#dao.deleteById(code)
        return new NPCmodel(removida)
    }

    async updateById(code, object) {
        await this.#dao.updateById(code, object)
    }
}

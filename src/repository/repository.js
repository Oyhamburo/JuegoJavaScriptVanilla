import { NPCmodel } from '../models/index.models.js'
import { NPCsDaoFactory } from '../daos/factory/index.factory.js'
import { asDto } from '../dtos/index.dtos.js'

 class npcRepo {
    #dao

    constructor() {
        this.#dao = NPCsDaoFactory.getDao()
    }

    async getAll() {
        const npcs = await this.#dao.getAll()
        return npcs.map(n => new NPCmodel(n))
    }

    async getById(code) {
        const dto = await this.#dao.getById(code)
        return new NPCmodel(dto)
    }

    async exists(code) {
        return await this.#dao.getById(code)
    }

    async create(newNpc) {
        await this.#dao.save(asDto(newNpc))
    }

    async removeById(code) {
        const removida = await this.#dao.deleteById(code)
        return new NPCmodel(removida)
    }

    async updateById(code, object) {
        await this.#dao.updateById(code, object)
    }
}

export {npcRepo}
import { NPCmodel } from '../models/index.models.js'
import { NPCsDaoFactory } from '../daos/factory/index.factory.js'
import { asDto } from '../dtos/index.dtos.js'
import { AdaptadorNPCs } from '../dtos/adaptadores/index.adaptador.js'

class npcRepo {
    #dao

    constructor() {
        this.#dao = NPCsDaoFactory.getDao()
    }

    async getAll() {
        const npcs = await this.#dao.getAll()
        return npcs.map(n => new AdaptadorNPCs(new NPCmodel(n)).devolver())
    }

    async getById(code) {
        const npc = await this.#dao.getById(code)
        return  new AdaptadorNPCs(new NPCmodel(npc)).devolver()
    }

    async exists(code) {
        return await this.#dao.getById(code)
    }

    async create(newNpc) {
        await this.#dao.create(asDto(newNpc))
    }

    async removeById(code) {
        const removida = await this.#dao.deleteById(code)
        return  new AdaptadorNPCs(new NPCmodel(removida)).devolver()
    }

    async updateById(code, object) {
        await this.#dao.updateById(code, object)
    }
}

export { npcRepo }
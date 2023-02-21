import { npcRepo } from "../../repository/index.repository.js"

let instaciaNpc = null

const repo = new npcRepo

class Service {


    static getInstance = () => {
        if (!instaciaNpc)
            instaciaNpc = new Service()
        return instaciaNpc
    }

    // static async exists(CODE) {
    //     try {
    //         return await repo.exists(CODE);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async getAll() {
        try {
            return await repo.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getProductById(code) {
        try {
            const npc = await repo.getById(code)
            return npc;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createProduct(code) {
        try {
            return await repo.create(code)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateProductById(code, object) {
        try {
            await repo.updateById(code, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteProductById(code) {
        try {
            return await repo.removeById(code)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

}

export { Service as NPCService }
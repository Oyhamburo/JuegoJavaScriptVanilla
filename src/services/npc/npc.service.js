// import { NPCModel } from "../../models/index.models.js";
import  {npcRepo}  from "../../repository/repository.js";

let instacia = null

const repo = new npcRepo

class Service {

    CODE = "code";
    
    static getInstance=()=>{
        if(!instacia)
            instacia=new Service()
        return instacia
    }

    static async exists(CODE) {
        try {
            return await repo.exists(CODE);
        } catch (error) {
            console.error(error);
        }
    }

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

export {Service as NPCService}
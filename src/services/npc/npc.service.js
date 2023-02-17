// import { NPCModel } from "../../models/index.models.js";
import  npcRepo  from "../../repository/repository.js";

class Service {

    CODE = "code";
    
    static getInstancia=()=>{
        if(!instacia)
            instacia=new PrimeraConexion()
        return instacia
    }

    static async exists(CODE) {
        try {
            return await npcRepo.exists(CODE);
        } catch (error) {
            console.error(error);
        }
    }

    async getAll() {
        try {
            return await npcRepo.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async getProductById(code) {
        try {
            const npc = await npcRepo.getById(code)
            return npc;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async createProduct(code) {
        try {
            return await npcRepo.create(code)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async updateProductById(code, object) {
        try {
            await npcRepo.updateById(code, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async deleteProductById(code) {
        try {
            return await npcRepo.removeById(code)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
}

export {Service as NPCService}
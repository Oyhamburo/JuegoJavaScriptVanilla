import { NPCModel } from "../../models/index.models.js";
import { BaseDao } from "../../daos/BaseDao.js";

class Service extends BaseDao {

    ID_FIELD = "_id";
    CODE = "code";
    
    static getInstance() {
        return new Service();
    }

    constructor() {
        if (typeof Service.instance === 'object') {
            return Service.instance;
        }
        super();
        Service.instance = this;
        return this;
    }

    static async exists(CODE) {
        try {
            return await NPCModel.findById(CODE);
        } catch (error) {
            this.logger.error(error);
        }
    }

    async getAll() {
        try {
            return await NPCModel.find();
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }
    
    async getProductById(code) {
        try {
            const npc = await NPCModel.findOne({
                [this.CODE] : code
            })
            return npc;
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }
    
    async createProduct(code) {
        try {
            return await NPCModel.create(code)
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }
    
    async updateProductById(code, object) {
        try {
            await NPCModel.findByIdAndUpdate(
                {
                    [this.CODE] : code
                },
                object, 
                {
                    runValidators: true
                })
            return true;
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }
    
    async deleteProductById(code) {
        try {
            return await NPCModel.findByIdAndDelete({[this.CODE]: code})
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }
    
}

export {Service as NPCService}
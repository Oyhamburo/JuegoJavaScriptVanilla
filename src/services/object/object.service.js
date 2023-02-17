import { ObjectModel } from "../../models/index.models.js";
import { BaseDao } from "../../daos/index.dao.js";

class Service extends BaseDao{

    ID_FIELD = "_id";
    CODE = "code"

    static getInstance() {
        return new Service();
    }

    constructor() {
        if(typeof Service.instance === 'object') {
            return Service.instance;
        }
        super();
        Service.instance = this;
        return this;
    }

    static async exists(code) {
        try {
            return await ObjectModel.findById(code);
        } catch (error) {
            this.logger.error(error);
        }
    }

    async getAll() {
        try {
            return await ObjectModel.find();
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }

    async getProductById(code) {
        try {
            const product = await ObjectModel.findOne({
                [this.CODE]: code
            })
            return product;
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }

    async createProduct(object) {
        try {
            return await ObjectModel.create(object)
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }

    async updateProductById(id, object) {
        try {
            await ObjectModel.findByIdAndUpdate(
                {
                    [this.CODE]: id
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

    async deleteProductById(id) {
        try {
            return await ObjectModel.findByIdAndDelete({ [this.CODE]: id })
        } catch (error) {
            this.logger.error(error);
            return false;
        }
    }

}

export { Service as ObjectService }
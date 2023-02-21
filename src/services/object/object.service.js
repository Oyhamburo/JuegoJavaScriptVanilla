import { ObjectRepo } from "../../repository/index.repository.js"

let instaciaObject = null

const repo = new ObjectRepo


class Service {


    static getInstance = () => {
        if (!instaciaObject)
            instaciaObject = new Service()
        return instaciaObject
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
            const object = await repo.getById(code)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createProduct(object) {
        try {
            return await repo.create(object)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateProductById(id, object) {
        try {
            await repo.updateById(id, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteProductById(id) {
        try {
            return await repo.removeById(id)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

}

export { Service as ObjectService }
import mongoose from 'mongoose'
import { asDtoObject } from '../../dtos/index.dtos.js'
import dotenv from "dotenv";
import { logger } from '../../utils/log/log4jsLogger.js';
import { BaseDao } from '../BaseDao.js';

dotenv.config();

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 20
    },
    description: {
        type: String,
        required: true,
        max: 200
    },
    code: {
        type: Number,
        required: true,
        max: 1000
    },
    image: {
        type: String,
        required: true,
        max: 130
    },
    stats: {
        type: String,
        required: false,
        max: 500
    }
})
const modelMoongoose = mongoose.model('objects', Schema)

export class ObjectsDaoMongo{

    CODE = "code";
    ID = "_id";

    async getAll() {
        try {
            const objects = await modelMoongoose.find({})
            return asDtoObject(objects)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async getById(code) {
        try {
            const object = await modelMoongoose.findOne({
                [this.CODE]: code
            })
            return asDtoObject(object)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async create(object) {
        try {
            const newObject = await modelMoongoose.create(object)
            return asDtoObject(newObject)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async deleteById(id) {
        try {
            const borrada = await modelMoongoose.findOneAndDelete({ [this.ID]: id })
            return asDtoObject(borrada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }


    async updateById(id, object) {

        try {
            const actualizada = await this.personas.findOneAndUpdate(
                {
                    [this.CODE]: id
                },
                object,
                {
                    runValidators: true
                })
            return asDtoObject(actualizada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}

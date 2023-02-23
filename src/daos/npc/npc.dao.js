import mongoose from 'mongoose'
import { asDto } from '../../dtos/index.dtos.js'
import dotenv from "dotenv";
import { logger } from '../../utils/log/log4jsLogger.js';
import {BaseDao} from '../BaseDao.js'

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
    faceset: {
        type: String,
        required: true,
        max: 130
    },
    chat: {
        type: String,
        required: true,
        max: 500
    }
})
const modelMoongoose = mongoose.model('npcs', Schema)

export class NPCsDaoMongo extends BaseDao {

    CODE = "code";


    // constructor() {
    // }

    // async init() {
    //     mongoose.connect(process.env.MONGO_URI, (err) => {
    //         err
    //             ? logger.error("⛔ Error al conectarse a MongoDB")
    //             : logger.info("🆗 Conectados a MongoDB")
    //     })
    // }

    // async disconnect() {
    //     await mongoose.disconnect()
    //     console.log('personas dao en mongodb -> cerrado')
    // }

    async getAll() {
        try {
            const npcs = await modelMoongoose.find({})
            return asDto(npcs)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async getById(code) {
        try {
            const npc = await modelMoongoose.findOne({
                [this.CODE]: code
            })
            return asDto(npc)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async create(npc) {
        try {
            await modelMoongoose.create(npc)
            return asDto(npc)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async deleteById(id) {
        try {
            const borrada = await modelMoongoose.findOneAndDelete({ [this.CODE]: id })
            return asDto(borrada)
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
            return asDto(actualizada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}

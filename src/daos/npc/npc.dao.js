import mongoose from 'mongoose'
import { asDto } from '../../dtos/index.dtos.js'
import dotenv from "dotenv";
import { logger } from '../../utils/log/log4jsLogger.js';

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
        max: 20
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

export default class PersonasDaoDb {

    constructor() {
        this.model = mongoose.model('npcs', Schema)
    }

    async init() {
        mongoose.connect(process.env.MONGO_URI, (err) => {
            err
                ? logger.error("⛔ Error al conectarse a MongoDB")
                : logger.info("🆗 Conectados a MongoDB")
        })
    }

    async disconnect() {
        await mongoose.disconnect()
        console.log('personas dao en mongodb -> cerrado')
    }

    async getAll() {
        try {
            const npcs = await this.model.find({})
            return asDto(npcs)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async getById(code) {
        try {
            const npc = await this.model.findOne({
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
            await this.model.create(npc)
            return asDto(npc)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async deleteById(idParaBorrar) {
        try {
            const borrada = await this.model.findOneAndDelete({ [this.CODE]: id })
            return asDto(borrada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    // async deleteAll() {
    //     await this.personas.deleteMany({})
    // }

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

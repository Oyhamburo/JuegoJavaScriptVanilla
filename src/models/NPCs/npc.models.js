import mongoose from "mongoose";

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
    },
})

export const NPCModel = mongoose.model("npcs", Schema);
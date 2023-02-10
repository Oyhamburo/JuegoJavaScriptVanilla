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
    image: {
        type: String,
        required: true,
        max: 130
    },
    stats: {
        type: String,
        required: true,
        max: 500
    },
})

export const ObjectModel = mongoose.model("objects", Schema);


// stats : {
//     physical,
//     magic,
//     armor,
//     magicResist,
//     health
// }
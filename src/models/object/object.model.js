class Object {
    constructor({
        name,
        description,
        code,
        image,
        stats
    }) {
        this.name = name
        this.description = description
        this.code = code
        this.image = image
        this.stats = stats
    }
}

export { Object }

// stats : {
//     physical,
//     magic,
//     armor,
//     magicResist,
//     health
// }
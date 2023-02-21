class ObjectDto {
    constructor({ id, name, description, code , image , stats }) {
        this.id = id
        this.name = name
        this.description = description
        this.code = code
        this.image = image
        this.stats = stats
    }
}

function asDto(object) {
    if (Array.isArray(object))
        return object.map(n => new ObjectDto(n))
    else
        return new ObjectDto(object)
}

export {asDto as asDtoObject}
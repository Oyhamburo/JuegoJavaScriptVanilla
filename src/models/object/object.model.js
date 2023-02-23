class ObjectModel {
    #id
    #name
    #description
    #code
    #image

    constructor({ id, name, description, code, image }) {
        this.id = id
        this.name = name
        this.description = description
        this.code = code
        this.image = image
    }

    get id() { return this.#id }

    set id(id) {
        if (!id) throw new Error('"id" es un campo requerido')
        this.#id = id
    }

    get name() { return this.#name }

    set name(name) {
        if (!name) throw new Error('"nombre" es un campo requerido')
        this.#name = name
    }

    get description() { return this.#description }

    set description(description) {
        if (!description) throw new Error('"description" es un campo requerido')
        this.#description = description
    }

    get code() { return this.#code }

    set code(code) {
        if (!code) throw new Error('"code" es un campo requerido')
        if (isNaN(code)) throw new Error('"code" es un campo de caracteres exclusivamente numéricos')
        this.#code = code
    }

    get image() { return this.#image }

    set image(image) {
        if (!image) throw new Error('"image" es un campo requerido')
        this.#image = image
    }
}

export { ObjectModel }
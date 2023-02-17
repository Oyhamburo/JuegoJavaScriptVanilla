class NPCmodel {
    #id
    #name
    #description
    #code
    #faceset
    #chat

    constructor({ id, name, description, code, faceset, chat }) {
        this.id = id
        this.name = name
        this.description = description
        this.code = code
        this.faceset = faceset
        this.chat = chat
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

    get faceset() { return this.#faceset }

    set faceset(faceset) {
        if (!faceset) throw new Error('"faceset" es un campo requerido')
        this.#faceset = faceset
    }

    get chat() { return this.#chat }

    set chat(chat) {
        if (!chat) throw new Error('"chat" es un campo requerido')
        this.#chat = chat
    }
}

export { NPCmodel }
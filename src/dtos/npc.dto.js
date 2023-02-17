class NPCdto {
    constructor({ id, name, description, code , faceset , chat }) {
        this.id = id
        this.name = name
        this.description = description
        this.code = code
        this.faceset = faceset
        this.chat = chat
    }
}

function asDto(npc) {
    if (Array.isArray(npc))
        return npc.map(n => new NPCdto(n))
    else
        return new NPCdto(npc)
}

export {asDto}
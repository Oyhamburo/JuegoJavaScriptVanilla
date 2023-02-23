export class AdaptadorNPCs {
    #npc

    constructor(npc) {
        this.npc = npc
    }

    devolver() {
        const npcAdaptado = {}
        npcAdaptado.id = this.npc.id
        npcAdaptado.name = this.npc.name
        npcAdaptado.description = this.npc.description
        npcAdaptado.code = this.npc.code
        npcAdaptado.faceset = this.npc.faceset
        npcAdaptado.chat = this.npc.chat
        return npcAdaptado
    }
}
export class AdaptadorObjects {
    #object

    constructor(object) {
        this.object = object
    }

    devolver() {
        const objectAdaptado = {}
        objectAdaptado.id = this.object.id
        objectAdaptado.name = this.object.name
        objectAdaptado.description = this.object.description
        objectAdaptado.code = this.object.code
        objectAdaptado.image = this.object.image
        // objectAdaptado.stats = this.object.stats
        return objectAdaptado
    }
}
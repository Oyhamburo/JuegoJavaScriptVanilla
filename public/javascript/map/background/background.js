import { Sprite } from "../../class/spriteClass.js"
import { URLMAPS } from "../../utils/index.js"
import { offset } from "../offset/index.js"
//Defino Mapa



const createBackground = (map) => { //mapStart
    let image = new Image()
    image.src = `${URLMAPS}${map}.png`
    const background = new Sprite({
        position: {
            x: offset.x,
            y: offset.y
        },
        image: image
    })
    return background
}




export { createBackground }
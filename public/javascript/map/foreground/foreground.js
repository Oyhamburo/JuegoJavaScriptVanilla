import { Sprite } from '../../class/index.js'
import { offset } from "../offset/index.js"
import { URLMAPS } from "../../utils/index.js"


const createForeground = (map) => { //mapStart
    let foregroundImage = new Image()
    foregroundImage.src = `${URLMAPS}${map}.png`
    const foreground = new Sprite({
        position: {
            x: offset.x,
            y: offset.y
        },
        image: foregroundImage
    })
    return foreground
}

export { createForeground } 
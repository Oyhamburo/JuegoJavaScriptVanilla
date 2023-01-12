import { offset } from "../offset/index.js"
import { Boundary } from "../../class/index.js"




const createBoundaries = (mapa,x,y) => {
    let collisions = mapa
    let collisionsMap = []
    let boundaries = []
    for (let i = 0; i < collisions.length; i += x) {
        collisionsMap.push(collisions.slice(i, y + i))
    }

    collisionsMap.forEach((row, i) => {
        row.forEach((Symbol, j) => {
            //numero que represente la colision
            if ((Symbol > 300 && Symbol <= 400) || (Symbol > 200 && Symbol <= 300) || (Symbol > 100 && Symbol <= 200) || Symbol === 1)
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        },
                        symbol: Symbol
                    })
                )
        })
    })
    return boundaries
}

export { createBoundaries }  
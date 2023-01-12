import { Sprite } from "../class/spriteClass.js"
import { canvas } from "../canvas/canvas.js"
import { URLPLAYER } from "../utils/index.js"


//Defino Image del player
const playerImageDown = new Image()
playerImageDown.src = `${URLPLAYER}playerDown.png`
const playerImageUp = new Image()
playerImageUp.src = `${URLPLAYER}playerUp.png`
const playerImageLeft = new Image()
playerImageLeft.src = `${URLPLAYER}playerLeft.png`
const playerImageRigth = new Image()
playerImageRigth.src = `${URLPLAYER}playerRigth.png`


const player = new Sprite({
    position: {
        x: canvas.width / 2.2 - 16 / 4 / 2 ,
        y: canvas.height / 2 - 64 / 2 
    },
    image: playerImageDown,
    frames: {
        max: 4
    },
    sprites: {
        up: playerImageUp,
        left: playerImageLeft,
        rigth: playerImageRigth,
        down: playerImageDown,
    }
})
export {player}

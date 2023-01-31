import { printShop } from "../ecommerce/printShop.js";
import { npcDetected } from "../function/index.js";
import { interactionNpc } from "../interaction/index.js";
import { stateInteraction } from "../interaction/stateInteraction.js";

// Teclas a utilizar
const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    },
    space: {
        pressed: false
    }
}
let lastKey = ''


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = true; lastKey = 'w'; break
        case 's': keys.s.pressed = true; lastKey = 's'; break
        case 'a': keys.a.pressed = true; lastKey = 'a'; break
        case 'd': keys.d.pressed = true; lastKey = 'd'; break
        case 'e': keys.e.pressed = true; lastKey = 'e'; break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = false; break
        case 's': keys.s.pressed = false; break
        case 'a': keys.a.pressed = false; break
        case 'd': keys.d.pressed = false; break
        case 'e': 
            stateInteraction && npcDetected.id == 321 ?  printShop('armory') : '' 
            stateInteraction && npcDetected.id == 3212 ?  printShop('posionShop') : '' 
        break
        case ' ': 
            npcDetected.state ?  interactionNpc() : ''
        break
        case 'i': activeInventory(); break
        case 'o': activeInventory2(); break
        case 'p': activeInventory3(); break
        case 'j': activeInventory4(); break
    }
})
const activeInventory = () => console.log('active inventory') 
const activeInventory2 = () => console.log('asd') 
const activeInventory3 = () => {
}
const activeInventory4 = () => {
}



export {keys,lastKey}
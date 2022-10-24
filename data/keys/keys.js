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
        // case ' ': keys.space.pressed = true; lastKey = ' '; break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = false; break
        case 's': keys.s.pressed = false; break
        case 'a': keys.a.pressed = false; break
        case 'd': keys.d.pressed = false; break
        case 'e': keys.e.pressed = false; break
        case ' ': espacio = true; break
        case 'i': activeInventory(); break
    }
})

function activeInventory(){
    console.log('inventory')
}
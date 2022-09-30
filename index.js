const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

const collisionsMap = []
// Mapeo de colisiones
for (let i = 0; i < collisions.length; i += 50) {
    collisionsMap.push(collisions.slice(i, 50 + i))
}

const boundaries = []
const offset = {
    x: -1400,
    y: -1000
}
// Mapeo de colisiones
collisionsMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        if (Symbol === 2274)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }

                })
            )
    })
})


//Defino Mapa
const image = new Image()
image.src = './img/v.0.1/map.png'
const foregroundImage = new Image()
foregroundImage.src = './img/v.0.1/mapForeground.png'
//Defino Image del player
const playerImageDown = new Image()
playerImageDown.src = './img/playerDown.png'
const playerImageUp = new Image()
playerImageUp.src = './img/playerUp.png'
const playerImageLeft = new Image()
playerImageLeft.src = './img/playerLeft.png'
const playerImageRigth = new Image()
playerImageRigth.src = './img/playerRigth.png'




const player = new Sprite({
    position: {
        x: canvas.width / 2.2 - 16 / 4 / 2,
        y: canvas.height / 2 - 64 / 2
    },
    image: playerImageDown,
    frames: { 
        max: 4
    },
    sprites:{
        up: playerImageUp,
        left: playerImageLeft,
        rigth: playerImageRigth,
        down: playerImageDown,
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

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
    }
}


const movables = [background, ...boundaries, foreground]


//Funcion que permite detectar un cubo por los cuatro lados | devuelve true o false para detener movimiento del player
function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            console.log("Collision")
        }
    })
    player.draw()
    foreground.draw()

    let moving = true
    player.moving = false
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image= player.sprites.up
        for (let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y +3
                }}
            })) {
                console.log("Collision")
                moving = false
                break
            }
        }
        if(moving)
        movables.forEach((movable) => {
            movable.position.y += 3
        })
        
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image= player.sprites.left
        for (let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x +3,
                    y: boundary.position.y
                }}
            })) {
                console.log("Collision")
                moving = false
                break
            }
        }
        if(moving)
        movables.forEach((movable) => {
            movable.position.x += 3
        })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image= player.sprites.down
        for (let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y -3
                }}
            })) {
                console.log("Collision")
                moving = false
                break
            }
        }
        if(moving)
        movables.forEach((movable) => {
            movable.position.y -= 3
        })
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image= player.sprites.rigth
        for (let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x - 3,
                    y: boundary.position.y
                }}
            })) {
                console.log("Collision")
                moving = false
                break
            }
        }
        if(moving)
        movables.forEach((movable) => {
            movable.position.x -= 3
        })
    }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = true; lastKey = 'w'; break
        case 's': keys.s.pressed = true; lastKey = 's'; break
        case 'a': keys.a.pressed = true; lastKey = 'a'; break
        case 'd': keys.d.pressed = true; lastKey = 'd'; break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = false; break
        case 's': keys.s.pressed = false; break
        case 'a': keys.a.pressed = false; break
        case 'd': keys.d.pressed = false; break
    }
})
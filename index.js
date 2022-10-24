const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const screen = document.querySelector('#transitionDoor')
canvas.width = 1280
canvas.height = 720

//Perimiteros y puertas
const collisionsMap = []
const doorMap = []
const CementeryMap = []
const PosionShopCollisionMap = []
const armoryCollisionMap = []

// Mapeo de colisiones
for (let i = 0; i < collisions.length; i += 41) {
    collisionsMap.push(collisions.slice(i, 41 + i))
}
// Mapeo de colisiones
const boundaries = []
const offset = {
    x: -200,
    y: -850
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
// Mapeo de puertas Inicio
const boundariesDoors = []
const offsetDoor = {
    x: -1000,
    y: -850
}
doorMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        if (Symbol === 2275 || Symbol === 3333 || Symbol === 4444 || Symbol === 5555 || Symbol === 6666)
            boundariesDoors.push(
                new BoundaryDoor({
                    position: {
                        x: j * BoundaryDoor.width + offsetDoor.x,
                        y: i * BoundaryDoor.height + offsetDoor.y
                    },
                    symbol: Symbol

                })
            )
    })
})


//Defino Mapa
let image = new Image()
image.src = './img/v.0.1/MapaV.0.3.png'
let foregroundImage = new Image()
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

let image2 = new Image()
image2.src = './img/v.0.1/prueba.png'



const player = new Sprite({
    position: {
        x: canvas.width / 2.2 - 16 / 4 / 2,
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

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})
const background2 = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image2
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})



// Agragar para permanecer un fondo statico
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
    const animationId = window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("CollisionBoundary")
        }
    })
    player.draw()
    foreground.draw()

    let moving = true
    player.moving = false
    //KEYS Pressed
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        //Colision con el perimetro del mapa
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    cancelAnimationFrame(animationId)
                    startAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
                    interaccion = true
                }
                if (boundary.symbol > 100 && boundary.symbol <= 200) {
                    console.log('objeto')
                    interaccion = true
                }
                if (boundary.symbol == 1) {
                    console.log('pared')
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })



    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }
                }
            })) {
                idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    cancelAnimationFrame(animationId)
                    startAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
                    interaccion = true
                }
                if (boundary.symbol > 100 && boundary.symbol <= 200) {
                    console.log('objeto')
                    interaccion = true
                }
                if (boundary.symbol == 1) {
                    console.log('pared')
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    cancelAnimationFrame(animationId)
                    startAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
                    interaccion = true
                }
                if (boundary.symbol > 100 && boundary.symbol <= 200) {
                    console.log('objeto')
                    interaccion = true
                }
                if (boundary.symbol == 1) {
                    console.log('pared')
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    cancelAnimationFrame(animationId)
                    startAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
                    interaccion = true
                }
                if (boundary.symbol > 100 && boundary.symbol <= 200) {
                    console.log('objeto')
                    interaccion = true
                }
                if (boundary.symbol == 1) {
                    console.log('pared')
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    }
    if (keys.e.pressed && interaccion) {
        interactuar(idColl)
    }
    if ((keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) && closeDialog) {
        resetInteractuar()
        interaccion = false
        closeDialog = false
    }
}
animate()


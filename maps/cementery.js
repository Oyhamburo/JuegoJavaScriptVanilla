//Defino Mapa

let imageCementery = new Image()
imageCementery.src = './img/v.0.1/cemetery.png'
let foregroundImageCementery = new Image()
foregroundImageCementery.src = './img/v.0.1/cementeryForeGround.png'

const offsetCementery = {
    x: - 770,
    y: -1250
}
// Mapeo de Salida del cementerio

for (let i = 0; i < collisionCementery.length; i += 45) {
    CementeryMap.push(collisionCementery.slice(i, 45 + i))
}

// Mapeo de colisiones
const boundariesCementery = []

CementeryMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        // 1 pared
        // 201 a 300 puertas
        // 101 a 100 objetos
        // 301 a 400 npcs
        if ((Symbol > 300 && Symbol <= 400) || (Symbol > 200 && Symbol <= 300) || (Symbol > 100 && Symbol <= 200) || Symbol === 1)
            boundariesCementery.push(
                new BoundaryDoor({
                    position: {
                        x: j * BoundaryDoor.width + offsetCementery.x,
                        y: i * BoundaryDoor.height + offsetCementery.y
                    },
                    symbol: Symbol
                })
            )
    })
})
const backgroundCementery = new Sprite({
    position: {
        x: offsetCementery.x,
        y: offsetCementery.y
    },
    image: imageCementery
})
const foregroundCementey = new Sprite({
    position: {
        x: offsetCementery.x,
        y: offsetCementery.y
    },
    image: foregroundImageCementery
})

// Agragar para permanecer un fondo statico
const movablesCementery = [backgroundCementery,...boundariesCementery, foregroundCementey]

function animateCementery() {
    console.log('cementery')
    const animationIdCemtery = window.requestAnimationFrame(animateCementery)
    backgroundCementery.draw()

    boundariesCementery.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("Exit Cementery")
        }
    })

    player.draw()
    foregroundCementey.draw()

    let moving = false
    player.moving = false
    //KEYS Pressed
    moving = true
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        // Colision con el perimetro del mapa
        for (let i = 0; i < boundariesCementery.length; i++) {
            const boundary = boundariesCementery[i]
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
                    console.log('puerta')
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
            movablesCementery.forEach((movablesCementery) => {
                movablesCementery.position.y += 3
            })
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundariesCementery.length; i++) {
            const boundary = boundariesCementery[i]
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
                    console.log('puerta')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
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
            movablesCementery.forEach((movableCementery) => {
                movableCementery.position.x += 3
            })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundariesCementery.length; i++) {
            const boundary = boundariesCementery[i]
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
                    startAnimation('inicio')
                    window.cancelAnimationFrame(animationIdCemtery)
                    console.log('puerta')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
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
            movablesCementery.forEach((movableCementery) => {
                movableCementery.position.y -= 3
            })
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundariesCementery.length; i++) {
            const boundary = boundariesCementery[i]
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
                    console.log('puerta')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    console.log('npc')
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
            movablesCementery.forEach((movableCementery) => {
                movableCementery.position.x -= 3
            })
    }
}

// animateCementery()

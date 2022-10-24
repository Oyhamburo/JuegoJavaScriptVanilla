// armory
let imageArmory = new Image()
imageArmory.src = './img/v.0.1/armory.png'
let foregroundImageArmory = new Image()
foregroundImageArmory.src = './img/v.0.1/foregroundArmory.png'

const offsetArmory = {
    x: -150,
    y: -850
}
// Mapeo de salida del Armory
for (let i = 0; i < collisionArmory.length; i += 25) {
    armoryCollisionMap.push(collisionArmory.slice(i, 25 + i))
}
// Mapeo de colisiones
const boundariesArmory = []
// const offsetBoundaryArmory = {
//     x: -100,
//     y: -750
// }
armoryCollisionMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        // si el numero va de x a x es un npc si va de x a x es un obj y si va de x a x una puerta y si es x es una pared
        // 45 pota {}
        // 1 pared
        // 201 a 300 puertas
        // 101 a 100 objetos
        // 301 a 400 npcs
        if ((Symbol > 300 && Symbol <= 400) || (Symbol > 200 && Symbol <= 300) || (Symbol > 100 && Symbol <= 200) || Symbol === 1)
            boundariesArmory.push(
                new BoundaryDoor({
                    position: {
                        x: j * BoundaryDoor.width +  offsetArmory.x,
                        y: i * BoundaryDoor.height + offsetArmory.y
                    },
                    symbol: Symbol
                })
            )
    })
})
const backgroundArmory = new Sprite({
    position: {
        x: offsetArmory.x,
        y: offsetArmory.y
    },
    image: imageArmory
})
const foregroundArmory = new Sprite({
    position: {
        x: offsetArmory.x,
        y: offsetArmory.y
    },
    image: foregroundImageArmory
})
// Agragar para permanecer un fondo statico
const movablesArmory = [backgroundArmory, ...boundariesArmory, foregroundArmory]
 idColl = ''
function animateArmory() {
    const animationIdArmory = window.requestAnimationFrame(animateArmory)
    backgroundArmory.draw()
    boundariesArmory.forEach((boundary) => {
        boundary.draw()
        
        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("CollisionBoundary")
        }
    })
    player.draw()
    let moving = true
    player.moving = false
    //KEYS Pressed
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < boundariesArmory.length; i++) {
            const boundary = boundariesArmory[i]
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
                    window.cancelAnimationFrame(animationIdArmory)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {//npcs
                    interaccion = true
                }
                if (boundary.symbol > 100 && boundary.symbol <= 200) {
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
            movablesArmory.forEach((movableArmory) => {
                movableArmory .position.y += 3
            })
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundariesArmory.length; i++) {
            const boundary = boundariesArmory[i]
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
                    window.cancelAnimationFrame(animationIdArmory)
                    startAnimation('inicio')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {//npcs
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
            movablesArmory.forEach((movableArmory) => {
                movableArmory.position.x += 3
            })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundariesArmory.length; i++) {
            const boundary = boundariesArmory[i]
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
                    console.log('puerta')
                    window.cancelAnimationFrame(animationIdArmory)
                    startAnimation('inicio')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
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
            movablesArmory.forEach((movableArmory) => {
                movableArmory.position.y -= 3
            })
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundariesArmory.length; i++) {
            const boundary = boundariesArmory[i]
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
                    window.cancelAnimationFrame(animationId)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
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
            movablesArmory.forEach((movableArmory) => {
                movableArmory.position.x -= 3
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
// animateArmory()
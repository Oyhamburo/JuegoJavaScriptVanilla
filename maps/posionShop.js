
let imagePosionShop = new Image()
imagePosionShop.src = './img/v.0.1/posionShop.png'
let foregroundImagePosionShop = new Image()
foregroundImagePosionShop.src = './img/v.0.1/posionShop.png'


const offsetPosionShop = {
    x: 64,
    y: -750
}
// Mapeo de salida del shopPosion
for (let i = 0; i < collisionPosionShop.length; i += 25) {
    PosionShopCollisionMap.push(collisionPosionShop.slice(i, 25 + i))
}
// Mapeo de colisiones
const boundariesExitPosionShop = []
const offsetExitPosionShop = {
    x: 64,
    y: -750
}
PosionShopCollisionMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        //1420 puerta
        //2 pared
        //1421 npc
        // 23 npc vieja
        // 45 npc perro
        // 1 objeto
        // si el numero va de x a x es un npc si va de x a x es un obj y si va de x a x una puerta y si es x es una pared
        // 45 pota {}
        // 1 pared
        // 201 a 300 puertas
        // 101 a 100 objetos
        // 301 a 400 npcs
        if ((Symbol > 300 && Symbol <= 400) || (Symbol > 200 && Symbol <= 300) || (Symbol > 100 && Symbol <= 200) || Symbol === 1)
            boundariesExitPosionShop.push(
                new BoundaryDoor({
                    position: {
                        x: j * BoundaryDoor.width + offsetExitPosionShop.x,
                        y: i * BoundaryDoor.height + offsetExitPosionShop.y
                    },
                    symbol: Symbol
                })
            )
    })
})
const backgroundPosionShop = new Sprite({
    position: {
        x: offsetPosionShop.x,
        y: offsetPosionShop.y
    },
    image: imagePosionShop
})
const foregroundPosionShop = new Sprite({
    position: {
        x: offsetPosionShop.x,
        y: offsetPosionShop.y
    },
    image: foregroundImagePosionShop
})
// Agragar para permanecer un fondo statico
const movablesPosionShop = [backgroundPosionShop, ...boundariesExitPosionShop, foregroundPosionShop]
let idColl = ''
let espacio = false
function animatePosionShop() {
    // console.log('run map posion shop')
    const animationIdPosionShop = window.requestAnimationFrame(animatePosionShop)
    backgroundPosionShop.draw()
    player.draw()

    let moving = true
    player.moving = false
    //KEYS Pressed
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        // Colision con el perimetro del mapa
        for (let i = 0; i < boundariesExitPosionShop.length; i++) {
            const boundary = boundariesExitPosionShop[i]
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
                    window.cancelAnimationFrame(animationIdPosionShop)
                    startAnimation('inicio')
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
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
            movablesPosionShop.forEach((movablesPosionShop) => {
                movablesPosionShop.position.y += 3
            })
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundariesExitPosionShop.length; i++) {
            const boundary = boundariesExitPosionShop[i]
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
                    window.cancelAnimationFrame(animationIdPosionShop)
                    startAnimation('inicio')
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
            movablesPosionShop.forEach((movablePosionShop) => {
                movablePosionShop.position.x += 3
            })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundariesExitPosionShop.length; i++) {
            const boundary = boundariesExitPosionShop[i]
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
                    window.cancelAnimationFrame(animationIdPosionShop)
                    startAnimation('inicio')
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
            movablesPosionShop.forEach((movablePosionShop) => {
                movablePosionShop.position.y -= 3
            })
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundariesExitPosionShop.length; i++) {
            const boundary = boundariesExitPosionShop[i]
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
                    window.cancelAnimationFrame(animationIdPosionShop)
                    startAnimation('inicio')
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
            movablesPosionShop.forEach((movablePosionShop) => {
                movablePosionShop.position.x -= 3
            })
    }

    if (keys.e.pressed && interaccion) {
        interactuar(idColl)
    }
    if(espacio){
        window.cancelAnimationFrame(animationIdPosionShop)
        openMarket()
    }
    if ((keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) && closeDialog) {
        resetInteractuar()
        interaccion = false
        closeDialog = false
    }
}





// Posion SHop

let imagePosionShop = new Image()
imagePosionShop.src = './img/v.0.1/posionShop.png'
let foregroundImagePosionShop = new Image()
foregroundImagePosionShop.src = ''


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
        // 1 objeto
        if (Symbol === 1421 || Symbol === 1420 || Symbol === 2 || Symbol === 1)
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

function rectangularCollisionExitPosionShop({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

function animatePosionShop() {
    const animationIdPosionShop = window.requestAnimationFrame(animatePosionShop)
    backgroundPosionShop.draw()

    boundariesExitPosionShop.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollisionExitPosionShop({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("collision")
        }
    })

    player.draw()
    foregroundPosionShop.draw()
    let moving = true
    player.moving = false
    //solo detecta en caso de que estes moviendote dentro de la zona
    //Se usa para pasto del pokemon
    // if (keys.s.pressed || keys.w.pressed || keys.a.pressed || keys.d.pressed) {
    //     // Colision con puertas
    //     for (let i = 0; i < boundariesExitPosionShop.length; i++) {
    //         const exit = boundariesExitPosionShop[i]

    //         if (rectangularCollisionExitCementery({
    //             rectangle1: player,
    //             rectangle2: exit
    //         })
    //         ) {
    //             switch (exit.symbol) {
    //                 case 2:
    //                     console.log('pared')
    //                     break;
    //                 case 1420:
    //                     console.log('puerta')
    //                     break;
    //                 case 1421:
    //                     console.log('npc')
    //                     break;
    //                 case 1:
    //                     console.log('objeto')
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             break
    //         }
    //     }
    // }

    //KEYS Pressed
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        // Colision con el perimetro del mapa
        for (let i = 0; i < boundariesExitPosionShop.length; i++) {
            const boundary = boundariesExitPosionShop[i]
            if (rectangularCollisionExitPosionShop({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                switch (boundary.symbol) {
                    case 2:
                        console.log('pared')
                        break;
                    case 1420:
                        console.log('puerta')
                        window.cancelAnimationFrame(animationIdPosionShop)
                        break;
                    case 1421:
                        console.log('npc')
                        break;
                    case 1:
                        console.log('objeto')
                        break;
                    default:
                        break;
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
            if (rectangularCollisionExitPosionShop({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }
                }
            })) {
                switch (boundary.symbol) {
                    case 2:
                        console.log('pared')
                        break;
                    case 1420:
                        console.log('puerta')
                        window.cancelAnimationFrame(animationIdPosionShop)
                        break;
                    case 1421:
                        console.log('npc')
                        break;
                    case 1:
                        console.log('objeto')
                        break;
                    default:
                        break;
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
            if (rectangularCollisionExitPosionShop({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                switch (boundary.symbol) {
                    case 2:
                        console.log('pared')
                        break;
                    case 1420:
                        console.log('puerta')
                        window.cancelAnimationFrame(animationIdPosionShop)
                        startAnimate()
                        break;
                    case 1421:
                        console.log('npc')
                        break;
                    case 1:
                        console.log('objeto')
                        testIntereaccion()
                        break;
                    default:
                        break;
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
            if (rectangularCollisionExitPosionShop({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                switch (boundary.symbol) {
                    case 2:
                        console.log('pared')
                        break;
                    case 1420:
                        console.log('puerta')
                        window.cancelAnimationFrame(animationIdPosionShop)
                        startAnimate()
                        break;
                    case 1421:
                        console.log('npc')
                        break;
                    case 1:
                        console.log('objeto')
                        window.addEventListener('keyup', (e) => {
                            if(e.keyCode == 32){
                                console.log('encontraste un obejto')
                            }
                        })
                        break;
                    default:
                        break;
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
}

function testIntereaccion() {
    if(keys.d.pressed){
        console.log('esta vivo')
    }
}


function startAnimatePosionShop() {
    animatePosionShop()
}
function startAnimate() {
    console.log('ejecuta funcion')
    animate()
}
animatePosionShop()
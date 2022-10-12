//Defino Mapa

let imageCementery = new Image()
imageCementery.src = './img/v.0.1/cemetery.png'
let foregroundImageCementery = new Image()
foregroundImageCementery.src = ''

const offsetBackCementery = {
    x: 64,
    y: -750
}
// Mapeo de Salida del cementerio
for (let i = 0; i < exitCementery.length; i += 30) {
    exitCementeryMap.push(exitCementery.slice(i, 30 + i))
}
// Mapeo de colisiones
const boundariesExitCementery = []
const offsetExitCementery = {
    x: 64,
    y: -750
}
exitCementeryMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        //numero que represente la colision
        if (Symbol === 1753)
            boundariesExitCementery.push(
                new BoundaryDoor({
                    position: {
                        x: j * BoundaryDoor.width + offsetExitCementery.x,
                        y: i * BoundaryDoor.height + offsetExitCementery.y
                    }

                })
            )
    })
})
const backgroundCementery = new Sprite({
    position: {
        x: offsetBackCementery.x,
        y: offsetBackCementery.y
    },
    image: imageCementery
})
const foregroundCementey = new Sprite({
    position: {
        x: offsetBackCementery.x,
        y: offsetBackCementery.y
    },
    image: foregroundImageCementery
})

// Agragar para permanecer un fondo statico
const movablesCementery = [backgroundCementery, ...boundariesExitCementery, foregroundCementey]


//Funcion que permite detectar un cubo por los cuatro lados | devuelve true o false para detener movimiento del player
// function rectangularCollision({ rectangle1, rectangle2 }) {
//     return (
//         rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
//         rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
//         rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
//         rectangle1.position.y + rectangle1.height >= rectangle2.position.y
//     )
// }

function rectangularCollisionExitCementery({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}
function animateCementery() {
    const animationIdCemtery = window.requestAnimationFrame(animateCementery)
    backgroundCementery.draw()

    boundariesExitCementery.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollisionExitCementery({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("Exit Cementery")
        }
    })

    player.draw()
    foregroundCementey.draw()

    //solo detecta en caso de que estes moviendote dentro de la zona
    //Se usa para pasto del pokemon
    if (keys.s.pressed) {
        // Colision con puertas
        for (let i = 0; i < boundariesExitCementery.length; i++) {
            const exit = boundariesExitCementery[i]
            const overlappingAreaCementery = (Math.min(player.position.x + player.width, exit.position.x + exit.width)
                - Math.max(player.position.x, exit.position.x))
                * (Math.min(player.position.y + player.height, exit.position.y + exit.height)
                    - Math.max(player.position.y, exit.position.y))

            if (rectangularCollisionExitCementery({
                rectangle1: player,
                rectangle2: exit
            }) &&
                overlappingAreaCementery > (player.width * player.height) / 2
            ) {
                window.cancelAnimationFrame(animationIdCemtery)
                ingreso()
                break
            }
        }
    }
    let moving = false
    player.moving = false
    //KEYS Pressed
    moving = true
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
                // console.log("Collision")
                moving = false
                break
            }
        }
        if (moving)
            movablesCementery.forEach((movable) => {
                movable.position.y += 3
            })



    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            // if (rectangularCollision({
            //     rectangle1: player,
            //     rectangle2: {
            //         ...boundary, position: {
            //             x: boundary.position.x + 3,
            //             y: boundary.position.y
            //         }
            //     }
            // })) {
            //     console.log("Collision")
            //     moving = false
            //     break
            // }
        }
        if (moving)
            movablesCementery.forEach((movable) => {
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
                moving = false
                break
            }
        }
        if (moving)
            movablesCementery.forEach((movable) => {
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
                console.log("Collision")
                moving = false
                break
            }
        }
        if (moving)
            movablesCementery.forEach((movable) => {
                movable.position.x -= 3
            })
    }
}



// Defino Mapa camino

let imageRute = new Image()
imageRute.src = ''
let foregroundImageRute = new Image()

const offsetBgRute = {
    x: 2,
    y: 2
}

// Mapeo de puertas de la ruta
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

// Mapeo de colisiones
const boundariesExitRute = []
const offsetExitRute = {
    x: 2,
    y: 6
}

exitRuteMap.forEach((row,i) => {
    row.forEach((Symbol,j)=>{
        //numero que reprensete la colision del mapeo
        if(Symbol === 2){
            boundariesExitRute.push(
                new Boundary({
                    position:{
                        x: j * Boundary.width + offsetExitRute,
                        y: j * Boundary.width + offsetExitRute.y 
                    }
                })
            )
        }
    })
})


function animateRute() {
    const animationIdRute = window.requestAnimationFrame(animateRute)
    backgroundRute.draw()

    boundariesExitRute.forEach((boundary) => {
        boundary.draw()

        if (rectangularCollisionExitRute({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("Exit Cementery")
        }
    })

    player.draw()
    foregroundRute.draw()

    //solo detecta en caso de que estes moviendote dentro de la zona
    //Se usa para pasto del pokemon
    if (keys.s.pressed) {
        // Colision con puertas
        for (let i = 0; i < boundariesExitRute.length; i++) {
            const exit = boundariesExitRute[i]
            const overlappingAreaRute = (Math.min(player.position.x + player.width, exit.position.x + exit.width)
                - Math.max(player.position.x, exit.position.x))
                * (Math.min(player.position.y + player.height, exit.position.y + exit.height)
                    - Math.max(player.position.y, exit.position.y))

            if (rectangularCollisionExitRute({
                rectangle1: player,
                rectangle2: exit
            }) &&
                overlappingAreaRute > (player.width * player.height) / 2
            ) {
                //cancel animation id 
                window.cancelAnimationFrame(animationIdRute)
                // test()
                console.log('saliste')
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
            movablesShop.forEach((movablesShop) => {
                movablesShop.position.y += 3
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
            movablesShop.forEach((movablesShop) => {
                movablesShop.position.x += 3
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
            movablesShop.forEach((movablesShop) => {
                movablesShop.position.y -= 3
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
            movablesShop.forEach((movablesShop) => {
                movablesShop.position.x -= 3
            })
    }
}
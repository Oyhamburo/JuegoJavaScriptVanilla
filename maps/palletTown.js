 
// function animate() {
//     const animationId = window.requestAnimationFrame(animate)
//     background.draw()
//     boundaries.forEach((boundary) => {
//         boundary.draw()

//         if (rectangularCollision({
//             rectangle1: player,
//             rectangle2: boundary
//         })) {
//             // console.log("CollisionBoundary")
//         }
//     })
//     player.draw()
//     foreground.draw()

//     let moving = true
//     player.moving = false
//     //KEYS Pressed
//     if (keys.w.pressed && lastKey == 'w') {
//         player.moving = true
//         player.image = player.sprites.up
//         //Colision con el perimetro del mapa
//         for (let i = 0; i < boundaries.length; i++) {
//             const boundary = boundaries[i]
//             if (rectangularCollision({
//                 rectangle1: player,
//                 rectangle2: {
//                     ...boundary, position: {
//                         x: boundary.position.x,
//                         y: boundary.position.y + 3
//                     }
//                 }
//             })) {
//                 idColl = boundary.symbol
//                 if (boundary.symbol > 200 && boundary.symbol <= 300) {
//                     console.log('puerta')
//                 }
//                 if (boundary.symbol > 300 && boundary.symbol <= 400) {
//                     console.log('npc')
//                     interaccion = true
//                 }
//                 if (boundary.symbol > 100 && boundary.symbol <= 200) {
//                     console.log('objeto')
//                     interaccion = true
//                 }
//                 if (boundary.symbol == 1) {
//                     console.log('pared')
//                 }
//                 moving = false
//                 break
//             }
//         }
//         if (moving)
//             movables.forEach((movable) => {
//                 movable.position.y += 3
//             })



//     }
//     else if (keys.a.pressed && lastKey == 'a') {
//         player.moving = true
//         player.image = player.sprites.left
//         for (let i = 0; i < boundaries.length; i++) {
//             const boundary = boundaries[i]
//             if (rectangularCollision({
//                 rectangle1: player,
//                 rectangle2: {
//                     ...boundary, position: {
//                         x: boundary.position.x + 3,
//                         y: boundary.position.y
//                     }
//                 }
//             })) {
//                 idColl = boundary.symbol
//                 if (boundary.symbol > 200 && boundary.symbol <= 300) {
//                     console.log('puerta')
//                 }
//                 if (boundary.symbol > 300 && boundary.symbol <= 400) {
//                     console.log('npc')
//                     interaccion = true
//                 }
//                 if (boundary.symbol > 100 && boundary.symbol <= 200) {
//                     console.log('objeto')
//                     interaccion = true
//                 }
//                 if (boundary.symbol == 1) {
//                     console.log('pared')
//                 }
//                 moving = false
//                 break
//             }
//         }
//         if (moving)
//             movables.forEach((movable) => {
//                 movable.position.x += 3
//             })
//     }
//     else if (keys.s.pressed && lastKey == 's') {
//         player.moving = true
//         player.image = player.sprites.down
//         for (let i = 0; i < boundaries.length; i++) {
//             const boundary = boundaries[i]
//             if (rectangularCollision({
//                 rectangle1: player,
//                 rectangle2: {
//                     ...boundary, position: {
//                         x: boundary.position.x,
//                         y: boundary.position.y - 3
//                     }
//                 }
//             })) {
//                 idColl = boundary.symbol
//                 if (boundary.symbol > 200 && boundary.symbol <= 300) {
//                     console.log('puerta')
//                 }
//                 if (boundary.symbol > 300 && boundary.symbol <= 400) {
//                     console.log('npc')
//                     interaccion = true
//                 }
//                 if (boundary.symbol > 100 && boundary.symbol <= 200) {
//                     console.log('objeto')
//                     interaccion = true
//                 }
//                 if (boundary.symbol == 1) {
//                     console.log('pared')
//                 }
//                 moving = false
//                 break
//             }
//         }
//         if (moving)
//             movables.forEach((movable) => {
//                 movable.position.y -= 3
//             })
//     }
//     else if (keys.d.pressed && lastKey == 'd') {
//         player.moving = true
//         player.image = player.sprites.rigth
//         for (let i = 0; i < boundaries.length; i++) {
//             const boundary = boundaries[i]
//             if (rectangularCollision({
//                 rectangle1: player,
//                 rectangle2: {
//                     ...boundary, position: {
//                         x: boundary.position.x - 3,
//                         y: boundary.position.y
//                     }
//                 }
//             })) {
//                 idColl = boundary.symbol
//                 if (boundary.symbol > 200 && boundary.symbol <= 300) {
//                     console.log('puerta')
//                 }
//                 if (boundary.symbol > 300 && boundary.symbol <= 400) {
//                     console.log('npc')
//                     interaccion = true
//                 }
//                 if (boundary.symbol > 100 && boundary.symbol <= 200) {
//                     console.log('objeto')
//                     interaccion = true
//                 }
//                 if (boundary.symbol == 1) {
//                     console.log('pared')
//                 }
//                 moving = false
//                 break
//             }
//         }
//         if (moving)
//             movables.forEach((movable) => {
//                 movable.position.x -= 3
//             })
//     }
//     if (keys.e.pressed && interaccion) {
//         interactuar(idColl)
//     }
//     if ((keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) && closeDialog) {
//         resetInteractuar()
//         interaccion = false
//         closeDialog = false
//     }
// }
// // animate()
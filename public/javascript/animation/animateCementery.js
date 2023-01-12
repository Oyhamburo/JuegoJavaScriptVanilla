import { rectangularCollision } from "../function/index.js"
import { player } from "../player/index.js"
import { keys, lastKey } from "../keys/keys.js"
import { changeAnimation } from "./changeAnimation.js"
import { createBackground,createForeground, createBoundaries,createMovables } from "../map/index.js"
import {collisionCementery} from "../coordinates/index.js"

let foregroundCementery = createForeground('cementeryForeGround')
let backgroundCementery = createBackground('cementery')
let boundariesCementery = createBoundaries(collisionCementery,45,45)
let movablesCementery = createMovables(backgroundCementery,boundariesCementery,foregroundCementery)
//posisionamiento
movablesCementery.forEach((movable) => {
    movable.position.y += -430
    movable.position.x += -590
})

let animate = () => {
    const animationId = window.requestAnimationFrame(animate)
    backgroundCementery.draw()
    player.draw()
    foregroundCementery.draw()

    //dibujar el perimetro

    boundariesCementery.forEach((boundary) => {
        boundary.draw()
        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            // console.log("CollisionBoundary")
        }
    })

    let moving = true
    player.moving = false
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
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
                // console.log(boundary.symbol)
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    // console.log('puerta')
                    window.cancelAnimationFrame(animationId)
                    changeAnimation()
                }
                // if (boundary.symbol > 300 && boundary.symbol <= 400) {
                //     interaccion = true
                // }
                // if (boundary.symbol > 100 && boundary.symbol <= 200) {
                //     interaccion = true
                // }
                // if (boundary.symbol == 1) {
                //     console.log('pared')
                // }
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
                console.log(boundary.symbol)
                // idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    // console.log('puerta')
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                // if (boundary.symbol > 300 && boundary.symbol <= 400) {
                //     console.log('npc')
                // }
                // if (boundary.symbol > 100 && boundary.symbol <= 200) {
                //     console.log('objeto')
                //     interaccion = true
                // }
                // if (boundary.symbol == 1) {
                //     console.log('pared')
                // }
                moving = false
                break
            }
        }
        if (moving)
            movablesCementery.forEach((movable) => {
                movable.position.x += 3
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
                console.log(boundary.symbol)
                // idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    // console.log('puerta')
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                // if (boundary.symbol > 300 && boundary.symbol <= 400) {
                //     console.log('npc')
                // }
                // if (boundary.symbol > 100 && boundary.symbol <= 200) {
                //     console.log('objeto')
                //     interaccion = true
                // }
                // if (boundary.symbol == 1) {
                //     console.log('pared')
                // }
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
                console.log(boundary.symbol)
                // idColl = boundary.symbol
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    // console.log('puerta')
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                // if (boundary.symbol > 300 && boundary.symbol <= 400) {
                //     console.log('npc')
                // }
                // if (boundary.symbol > 100 && boundary.symbol <= 200) {
                //     console.log('objeto')
                //     interaccion = true
                // }
                // if (boundary.symbol == 1) {
                //     console.log('pared')
                // }
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

export { animate as animateCementery }     
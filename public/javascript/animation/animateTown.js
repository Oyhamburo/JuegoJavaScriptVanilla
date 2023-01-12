import { rectangularCollision, changeNpcDetected } from "../function/index.js"
import { player } from "../player/index.js"
import { keys, lastKey } from "../keys/keys.js"
import { changeAnimation } from "./changeAnimation.js"
import { createBackground, createBoundaries, createMovables, createForeground, offset } from "../map/index.js"
import { collisionsPalletTown } from "../coordinates/index.js"
import { stateInteraction } from "../interaction/stateInteraction.js"
import { removeInteraction } from "../interaction/removeInteraction.js"

let foregroundTow = createForeground('mapForeground')
let backgroundTown = createBackground('mapStart')
let boundariesTow = createBoundaries(collisionsPalletTown, 41, 41)
let movablesTown = createMovables(backgroundTown, boundariesTow, foregroundTow)

let animate = () => {
    const animationId = window.requestAnimationFrame(animate)
    backgroundTown.draw()
    player.draw()
    foregroundTow.draw()
    //dibujar el perimetro

    // boundariesTow.forEach((boundary) => {
    //     boundary.draw()
    //     if (rectangularCollision({
    //         rectangle1: player,
    //         rectangle2: boundary
    //     })) {
    //         console.log("CollisionBoundary")
    //     }
    // })

    let moving = true
    player.moving = false
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movablesTown.forEach((movable) => {
                movable.position.y += 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movablesTown.forEach((movable) => {
                movable.position.x += 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movablesTown.forEach((movable) => {
                movable.position.y -= 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movablesTown.forEach((movable) => {
                movable.position.x -= 3
            })
        stateInteraction ? removeInteraction() : ''
    }


}
export { animate as animateTown }

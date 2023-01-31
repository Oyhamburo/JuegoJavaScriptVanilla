import { rectangularCollision,changeNpcDetected } from "../function/index.js"
import { player } from "../player/index.js"
import { keys, lastKey } from "../keys/keys.js"
import { changeAnimation } from "./changeAnimation.js"
import { createBackground, createForeground, createBoundaries, createMovables } from "../map/index.js"
import { collisionArmory } from "../coordinates/index.js"
import { stateInteraction } from "../interaction/stateInteraction.js"
import { removeInteraction } from "../interaction/removeInteraction.js"
import { stateEcommerce } from "../ecommerce/stateEcommerce.js"

let foregroundArmory = createForeground('foregroundArmory')
let backgroundArmory = createBackground('armory')
let boundariesArmory = createBoundaries(collisionArmory, 25, 25)
let movablesArmory = createMovables(backgroundArmory, boundariesArmory, foregroundArmory)


let animate = () => {
    const animationId = window.requestAnimationFrame(animate)
    backgroundArmory.draw()
    player.draw()
    foregroundArmory.draw()
    // console.log('armory')
    let moving = true
    player.moving = false
    if (stateEcommerce)
        window.cancelAnimationFrame(animationId)
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
                if (boundary.symbol > 200 && boundary.symbol <= 300) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation()
                }
                if (boundary.symbol > 300 && boundary.symbol <= 400) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movablesArmory.forEach((movable) => {
                movable.position.y += 3
            })
        stateInteraction ? removeInteraction() : ''
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
                // console.log(boundary.symbol)
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
            movablesArmory.forEach((movable) => {
                movable.position.x += 3
            })
        stateInteraction ? removeInteraction() : ''
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
            movablesArmory.forEach((movable) => {
                movable.position.y -= 3
            })
        stateInteraction ? removeInteraction() : ''
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
                // console.log(boundary.symbol)
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
            movablesArmory.forEach((movable) => {
                movable.position.x -= 3
            })
        stateInteraction ? removeInteraction() : ''
    }

}

export { animate as animateArmory }
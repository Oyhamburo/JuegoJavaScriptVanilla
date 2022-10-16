// mision abortada

class AnimatedMap {
    constructor(background, foreground, boundaries, movables) {
        this.background = background
        this.foreground = foreground
        this.boundaries = boundaries
        this.movables = movables
    }

    rectangularCollision({ rectangle1, rectangle2 }) {
        return (
            rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
            rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
            rectangle1.position.y + rectangle1.height >= rectangle2.position.y
        )
    }
 
    run() {
        const animationId = window.requestAnimationFrame(this.run())
        this.background.draw()
        this.boundaries.forEach((boundary) => {
            boundary.draw()
            if (this.rectangularCollision({
                rectangle1: this.player,
                rectangle2: boundary
            })) {
                console.log('colision')
            }
        });

        player.draw()
        this.foreground.draw()

        let moving = true
        player.moving = false

        if (keys.w.pressed && lastKey == 'w') {
            player.moving = true
            player.image = player.sprites.up

            for (let i = 0; i < this.boundaries.length; i++) {
                const boundary = this.boundaries[i]
                if (this.rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })) {
                    moving=false
                    break
                }
                
            }
            if(moving)
                this.movables.forEach((movable)=>{
                    movable.position.y += 3
                })
        }
        if (keys.a.pressed && lastKey == 'a') {
            player.moving = true
            player.image = player.sprites.left

            for (let i = 0; i < this.boundaries.length; i++) {
                const boundary = this.boundaries[i]
                if (this.rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x = 3,
                            y: boundary.position.y
                        }
                    }
                })) {
                    moving=false
                    break
                }
                
            }
            if(moving)
                this.movables.forEach((movable)=>{
                    movable.position.x += 3
                })
        }
        if (keys.s.pressed && lastKey == 's') {
            player.moving = true
            player.image = player.sprites.down

            for (let i = 0; i < this.boundaries.length; i++) {
                const boundary = this.boundaries[i]
                if (this.rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })) {
                    moving=false
                    break
                }
                
            }
            if(moving)
                this.movables.forEach((movable)=>{
                    movable.position.y -= 3
                })
        }
        if (keys.d.pressed && lastKey == 'd') {
            player.moving = true
            player.image = player.sprites.rigth

            for (let i = 0; i < this.boundaries.length; i++) {
                const boundary = this.boundaries[i]
                if (this.rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y 
                        }
                    }
                })) {
                    moving=false
                    break
                }
                
            }
            if(moving)
                this.movables.forEach((movable)=>{
                    movable.position.x -= 3
                })
        }
    }
}

let inicio = new AnimatedMap(background,foreground,boundaries,movables)
// inicio.run()
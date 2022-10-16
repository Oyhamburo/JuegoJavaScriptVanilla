// Visualizacion del mapa y del personaje
class Sprite {
    constructor({ position, image, frames = { max: 1 }, sprites }) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}

        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height / this.frames.max
        }
        this.moving = false
        this.sprites= sprites
    }
    //funcion para imprimir una imagen en 
    draw() {
        c.drawImage(
            this.image,
            0,
            this.frames.val * this.width,
            this.image.width,
            this.image.height / this.frames.max,
            this.position.x,
            this.position.y,
            this.image.width,
            this.image.height / this.frames.max
        )
        if(!this.moving) return

        if ( this.frames.max > 1){
            this.frames.elapsed++
        }
        if ( this.frames.elapsed % 10 === 0){
            if (this.frames.val < this.frames.max - 1 ) this.frames.val++
            else this.frames.val = 0
        }
    }
}
// Perimetro Collisiones
class Boundary {
    static width = 64.2
    static height = 63.8
    constructor({ position,symbol }) {
        this.position = position 
        this.width = 56
        this.height = 56
        this.symbol = symbol
    }
    draw() {
        c.fillStyle = 'rgba(255,0,0,0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class BoundaryDoor {
    static width = 64.4
    static height = 63.8
    constructor({ position,symbol }) {
        this.position = position
        this.width = 56
        this.height = 56
        this.symbol = symbol
    }
    draw() {
        c.fillStyle = 'rgba(0,0,255,0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    test(){
        console.log(this.symbol)
    }
}

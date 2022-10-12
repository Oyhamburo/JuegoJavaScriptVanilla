//Transisiones puertas
function test() {
    screen.style.animationName = 'trans-door-open'
    removeTest()
}
function removeTest() {
    screen.style.animationName = 'trans-door-closed'
    animateCementery()
}

function ingreso() {
    screen.style.animationName = 'trans-door-open'
    salida()
}
function salida() {
    screen.style.animationName = 'trans-door-closed'
    animate()
}
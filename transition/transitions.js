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


 
function startAnimation(option) {
    switch (option) {
        case 'inicio':
            animate()
            break;
        case 'cementery ':
            animateCementery()
            break;
        case 'posionShop':
            animatePosionShop()
            break;
        case 'rute':
            // animateRute()
            break;
        default:
            break;
    }
}
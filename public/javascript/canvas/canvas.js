const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1280
canvas.height = 720
export {c, canvas}
const controll = document.getElementById('controll')
if(screen.width < 1280){
    controll.style.display = "flex"
    canvas.width = screen.width
    canvas.height = screen.height
}

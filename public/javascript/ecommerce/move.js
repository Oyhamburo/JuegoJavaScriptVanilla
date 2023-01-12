let select = document.querySelector('#ecommerce__window__img__0')
let i = 0
const move = () => {
    select.classList.add('animateShadow')
}
const moveUp = () =>{
    select.classList.remove('animateShadow')
    i = i - 6
    i < 0 ? i += 6 +12 : ''
    select = document.querySelector(`#ecommerce__window__img__${i}`)
    select.classList.add('animateShadow')
}
const moveDown = () =>{
    select.classList.remove('animateShadow')
    i = i + 6
    i > 17 ? i -= 18 : ''
    select = document.querySelector(`#ecommerce__window__img__${i}`)
    select.classList.add('animateShadow')
}
const moveLeft = () =>{
    select.classList.remove('animateShadow')
    i = i - 1
    i < 0 ? i += 6 : ''
    select = document.querySelector(`#ecommerce__window__img__${i}`)
    select.classList.add('animateShadow')
}
const moveRigth = () =>{
    select.classList.remove('animateShadow')
    i = i + 1
    i > 17 ? i -= 6 : ''
    select = document.querySelector(`#ecommerce__window__img__${i}`)
    select.classList.add('animateShadow')
}
export {move,moveUp,moveDown,moveRigth,moveLeft,i as iEcomerce}

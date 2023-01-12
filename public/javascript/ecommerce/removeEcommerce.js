import { animateArmory } from "../animation/index.js"
import { changeStateEcommerce } from "./stateEcommerce.js"

const removeEcommerce = () => {
    const windowShop = document.querySelector('#ecommerce')
    windowShop.style.display = 'none'
    changeStateEcommerce(false)    
    animateArmory()
}
export { removeEcommerce }
import { transitionBlackOut } from "../function/transitionBlackOut.js"
import { removeInteraction } from "../interaction/index.js"
import { changeStateEcommerce,filterArmory,filterPosionShop,printItems } from "./index.js"

const printShop = (shop) => {
    changeStateEcommerce(true)
    removeInteraction()
    const windowShop = document.querySelector('#ecommerce')
    windowShop.style.display = 'block'
    fetch(`http://localhost:8400/api/object`)
        .then((response) => response.json())
        .then((data) => printItems(data,shop) );

}

export { printShop }
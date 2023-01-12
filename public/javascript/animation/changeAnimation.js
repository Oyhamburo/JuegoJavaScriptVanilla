import { transitionBlackOut } from "../function/transitionBlackOut.js"
import { animateArmory } from "./animateArmory.js"
import { animateCementery } from "./animateCementery.js"
import { animatePosionShop } from "./animatePosionShop.js"
import { animateTown } from "./animateTown.js"

const changeAnimation = (key) => {
    transitionBlackOut()
    switch (key) {
        case 220:
            animateTown()
            break;
        case 230:
            animateArmory()
            break;
        case 231:
            animatePosionShop()
            break;
        case 232:
            animateCementery()
            break;
        default:
            break;
    }

}

export { changeAnimation }
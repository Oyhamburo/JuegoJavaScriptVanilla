import { changeNpcDetected } from "../function/npcDetected.js"
import { changeStateInteraction } from "./stateInteraction.js"

const removeInteraction = () => {
    const screenDialog = document.querySelector('#dialog')
    const screenChat = document.querySelector('#dialogChat')
    const screenDialogFaceset = document.querySelector('#dialogFaceset')
    
    screenDialog.style.display = 'none'
    screenChat.style.display = 'none'
    screenDialogFaceset.style.display = 'none'
    
    changeStateInteraction(false)
    changeNpcDetected(false,null)
}   

export {removeInteraction}
import { writeChat } from "../../function/writeChat.js"
import { changeStateInteraction } from "../../interaction/stateInteraction.js"
import { urlFaceset } from "../../utils/index.js"

const printDialogDefault = (data) => {
    const screenDialog = document.querySelector('#dialog')
    const screenChat = document.querySelector('#dialogChat')
    const screenDialogFaceset = document.querySelector('#dialogFaceset')

    screenDialogFaceset.style.backgroundImage = `url(${urlFaceset}${data.faceset})`
    // screenChat.textContent = data.chat //Cambio por funcion que escribe
    writeChat(screenChat,data.chat)
    screenDialog.style.display = 'block'
    screenChat.style.display = 'block'
    screenDialogFaceset.style.display = 'block'
    changeStateInteraction(true)
}

export { printDialogDefault }
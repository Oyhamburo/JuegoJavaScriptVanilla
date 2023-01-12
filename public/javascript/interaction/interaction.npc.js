import { npcDetected } from "../function/index.js"
import { printDialogDefault } from "../dialog/index.js"
const interactionNpc = () => {
    const { id } = npcDetected
    fetch(`http://localhost:8400/api/npc/${id}`)
        .then((response) => response.json())
        .then((data) => printDialogDefault(data));

}

export { interactionNpc }
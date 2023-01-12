let npcDetected = {
    state:false,
    id:null
}

const changeNpcDetected = (state,id) => {
    npcDetected.state = state 
    npcDetected.id =id
}

export {npcDetected,changeNpcDetected}
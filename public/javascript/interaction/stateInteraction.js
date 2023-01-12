let stateInteraction = false
const changeStateInteraction = (state) =>{
    if(state)
        stateInteraction = true
    else    
        stateInteraction = false
}

export {stateInteraction,changeStateInteraction}
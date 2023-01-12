let mov = false
const stateMov = (state) => {
    if (state)
        mov = true
    else
        mov = false
}

export {mov,stateMov}
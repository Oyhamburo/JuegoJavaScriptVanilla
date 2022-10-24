// agreagar dialog desde la clase cuando interactuo con un objeto
let interaccion = false
let closeDialog = false
function interactuar(objeto){
    if(objeto != ''){
        const screenDialog = document.querySelector('#dialog')
        const screenChat = document.querySelector('#dialogChat')
        const screenDialogFaceset = document.querySelector('#dialogFaceset')
        if(objeto > 100 && objeto <= 200){//Es un objeto
            let item
            for (const obj of items.consumibles.health ) {
                obj.id == objeto ? item = obj : '' 
            }
            screenDialogFaceset.style.backgroundImage = `url(${item.thumbnail})`
            screenChat.textContent = item.descript
            screenDialog.style.display = 'block'
            closeDialog = true

        }if(objeto > 300 && objeto <= 400){//Es un npc
            npc = npcs.find(e=> e.id == objeto)
            screenDialogFaceset.style.backgroundImage = `url(${npc.thumbnail})`
            screenChat.textContent = npc.descript
            screenDialog.style.display = 'block'
            closeDialog = true
            if(keys.e.pressed && interaccion){
                console.log('hola')
            }
        }
    }else{
        console.log('error no existe el id el objeto al que quiere acceder')
    }
}
function resetInteractuar(){
    const screenDialog = document.querySelector('#dialog')
    screenDialog.style.display = 'none'
}




// function fetchItem() {
//     fetch(`./bd/objetos.js`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })
// }
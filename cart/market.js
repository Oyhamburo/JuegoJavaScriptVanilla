let selectItem = 0
let previousSelectItem = 0
const inventoryPosionShop = [104, 105, 106, 107, 108, 109, 104, 105, 106, 107, 108, 109, 104, 105, 106, 107, 108, 109]
function openMarket() {
    const screenMarket = document.querySelector('#ecommerce')
    const screenDialog = document.querySelector('#dialog')
    let shadowSelect = document.querySelector(`#ecommerce__window__img__0`)
    screenMarket.style.display = 'block'
    screenDialog.style.display = 'none'
    shadowSelect.classList.add('animateShadow')
    inventoryPosionShop.forEach((e, i) => {//recorro el inventario de la tienda
        let item = items.consumibles.health.find(obj => obj.id == e)//comparo los id de la tienda con la base de datos de objetos y lo traigo
        let screenObject = document.querySelector(`#ecommerce__window__img__item__${i}`)
        screenObject.src = `./img/items/${item.thumbnail}`
    })
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'd':
                selectItem += 1
                selectItem ==  6 ? selectItem = 0 : ''
                selectItem == 12 ? selectItem = 6 : ''
                selectItem == 18 ? selectItem = 12 : ''
                mov(selectItem)
                break;
            case 'a':
                selectItem -= 1
                selectItem ==  -1 ? selectItem = 5 : ''
                selectItem == 6 ? selectItem = 11 : ''
                selectItem == 12 ? selectItem = 17 : ''
                mov(selectItem)
                break;
            case 'w':
                selectItem -= 6
                selectItem < 0 ? selectItem += 18 : ''
                mov(selectItem)
                break;
            case 's':
                selectItem += 6
                selectItem >= 18 ? selectItem -= 18 : ''
                mov(selectItem)
                break;
            default:
                break;
        }
    });
}

function mov(position){
    const previous = document.querySelector(`#ecommerce__window__img__${previousSelectItem}`)
    const select = document.querySelector(`#ecommerce__window__img__${position}`)
    const faceset = document.querySelector(`#ecommerce__thumbnail`)
    const chat = document.querySelector('#ecommerce__chat')
    previous.classList.remove('animateShadow') 
    previousSelectItem = position
    select.classList.add('animateShadow') 
    let id = inventoryPosionShop.find((e,i)=> i == position)
    let item = items.consumibles.health.find((e,i)=> e.id == id)
    faceset.style.backgroundImage = `url(./img/items/${item.thumbnail})`
    chat.textContent = `${item.descript}`
}
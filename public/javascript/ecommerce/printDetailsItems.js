import { writeChat } from "../function/index.js"
import { iEcomerce,priceItem } from "./index.js"
const thumbnail = document.querySelector('#ecommerce__thumbnail')
const chat = document.querySelector('#ecommerce__chat')
// const price = document.querySelector('#')
const printDetailsItem = (items)=>{
    let item = items[iEcomerce]
    if(item){
        thumbnail.style.backgroundImage = `url(img/asset/items/${item.image})`
        chat.textContent = item.description
        writeChat(chat,item.description)
        // price
        priceItem(item.price)
    }
}
export {printDetailsItem}
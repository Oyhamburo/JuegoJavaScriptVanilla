import { buttonsEcommerce, filterArmory, filterPosionShop } from "./index.js"
// ecommerce__window__img__item__0
const printItems = async (items, shop) => {
    if (shop == 'armory')
        items = await filterArmory(items)
    else
        items = await filterPosionShop(items)
    buttonsEcommerce(items)
    items.forEach((item, index) => {
        let cell = document.querySelector(`#ecommerce__window__img__item__${index}`)
        // cell.src = `public/img/asset/items/${item.image}`
        cell.src = `img/asset/items/${item.image}`
    });
}

export { printItems }
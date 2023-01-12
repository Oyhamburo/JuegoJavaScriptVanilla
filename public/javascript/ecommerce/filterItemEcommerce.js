import { printItems } from "./index.js"

const filterArmory = (items) => {
    const itemsFilter = items.filter((item) => {
        return (
            item.code == 150 ||
            item.code == 151 ||
            item.code == 152
        )
    })
    return itemsFilter
}
const filterPosionShop = (items) => {
    const itemsFilter = items.filter((item) => {
        return (
            item.code == 150 ||
            item.code == 151 ||
            item.code == 152
        )
    })
    return itemsFilter
}
export { filterArmory,filterPosionShop }
let gold = document.querySelector('#goldPlayer')
let price = document.querySelector('#priceItem')
const goldPlayer = (golden) => {
    gold.textContent = '$'+golden
}
const priceItem = (priceItem)=>{
    price.textContent = '$'+priceItem
}

export { goldPlayer,priceItem }
const productsDB = require("./json/products.json")

const saleProducts = (arr) => {
    return arr.filter((product) => {
        return product.price !== product.originalPrice
    })
}
const itemsOnSale = saleProducts(productsDB)
console.log(itemsOnSale)
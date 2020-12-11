//recording at 10:45am

const transactions = require('./coffee.json');

function totalNumber() {

}

const totalAmountForType = (orderType) => {
    const total = ordersByType(orderType)
        .map(order => order.cost)
        .reduce((a,b)=> a + b)        
    return total;
}
console.log(totalAmountForType('latte'))

function ordersByType(orderType) {
    return transactions.filter(coffee => coffee.order === orderType);
}
console.log(ordersByType('latte').length)

function totalAmount() {
    let total = 0;
    for (let t of transactions) {
        total += t.cost
    }
    return parseFloat(total.toFixed(2));
}

module.exports = {
    totalAmountForType,
    ordersByType,
    totalAmount
}


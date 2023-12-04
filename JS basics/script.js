

// 30 telefoni da se pomnozat so cenata(119.95) i da se dodade taksata (5% od cenata na telefonot (119.95))

let price = 119.95;
let tax = 5;
let amount = 30;
let taxResult = price * tax / 100;
let priceThirty = amount*price+taxResult;
console.log ("The price of 30 phones plus tax is:");
console.log (priceThirty)

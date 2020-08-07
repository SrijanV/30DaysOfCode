let a = "Srijan Vatsraj";
console.log(a);

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}

const userCredentials = getUserCredentials('Srijan', 'Vatsraj', 'srijanvatsraj2@gmail.com');

function getPreTaxTotal(cartItems) {
    let total = 0;
    
    for(let cartItem of cartItems) {
        total += cartItem.quantity * cartItem.price;
    }
    
    return total;
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

const preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

console.log(userCredentials)
console.log(preTaxTotal);
console.log(finalTaxedTotal);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'tote bag';
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '575 Broadway, New York City, New York';
const product = products_1.default.filter(product => product.name === productName)[0];
let productPreorder = product.preOrder === 'true' ? true : false;
if (productPreorder === true) {
    console.log('We will send you a message when your product is on its way');
}
shipping = Number(product.price) >= 25 ? 0 : 5;
if (shipping === 0) {
    console.log('You have qualified for free shipping!\n');
}
taxPercent = shippingAddress.match('New York') ? 0.1 : .05;
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
console.log(`Product: ${product.name}
Shipping Address: ${shippingAddress}
Price: $${Number(product.price).toFixed(2)}
Tax Total: ${taxTotal.toFixed(2)}
Shipping Price: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}\n`);

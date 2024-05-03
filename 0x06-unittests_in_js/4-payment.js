#!/usr/bin/node
const Utils = require('./utils');

/**
 * Sends a payment request to an API
 * @param {number} totalAmount - The total amount
 * @param {number} totalShipping - The total shipping cost
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const total = Utils.calculateNumber(totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;

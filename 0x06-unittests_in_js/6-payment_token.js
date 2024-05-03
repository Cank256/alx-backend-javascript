#!/usr/bin/node
/**
 * Gets payment token from API based on success condition
 * @param {boolean} success - Indicates whether the API call should be successful
 * @returns {Promise<object>} A promise that resolves with a payment token object or rejects if success is false
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            reject(new Error('API call failed'));
        }
    });
}

module.exports = getPaymentTokenFromAPI;

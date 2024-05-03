#!/usr/bin/node
/**
 * Module containing utility functions
 */
const Utils = {
    /**
     * Performs arithmetic operations on two numbers based on the specified operation type
     * @param {string} type - The type of operation (SUM, SUBTRACT, or DIVIDE)
     * @param {number} a - The first number
     * @param {number} b - The second number
     * @returns {number|string} The result of the operation or an error message
     */
    calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        switch (type) {
            case 'SUM':
                return roundedA + roundedB;
            case 'SUBTRACT':
                return roundedA - roundedB;
            case 'DIVIDE':
                return roundedB === 0 ? 'Error' : roundedA / roundedB;
            default:
                throw new Error('Invalid operation type');
        }
    }
};

module.exports = Utils;

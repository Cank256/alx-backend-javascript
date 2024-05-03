#!/usr/bin/node
/**
 * Module containing utility functions
 */
const Utils = {
    /**
     * Rounds two numbers and returns their sum
     * @param {number} a - The first number
     * @param {number} b - The second number
     * @returns {number} The sum of the rounded numbers
     */
    calculateNumber: function(a, b) {
        return Math.round(a) + Math.round(b);
    }
};

module.exports = Utils;

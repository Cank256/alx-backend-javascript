#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of two rounded numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
});

describe('calculateNumber', function() {
    it('for first number rounded', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
});

describe('calculateNumber', function() {
    it('for second number rounded', function() {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
    });
});

describe('calculateNumber', function() {
    it('for both numbers rounded', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});

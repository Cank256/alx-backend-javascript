#!/usr/bin/node
const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments and log correct message', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWithExactly(calculateNumberStub,'SUM', 100, 20);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});

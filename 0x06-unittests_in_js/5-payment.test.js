#!/usr/bin/node
const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function() {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should log the correct total for given amounts (100, 20)', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
        sinon.assert.calledOnce(consoleLogSpy);
    });

    it('should log the correct total for given amounts (10, 10)', function() {
        calculateNumberStub.returns(20);
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
        sinon.assert.calledOnce(consoleLogSpy);
    });
});

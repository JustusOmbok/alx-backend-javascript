const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils'); // Assuming utils.js is present
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM type and return 10', () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    });
});

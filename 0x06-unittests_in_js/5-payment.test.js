const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log the correct message for total amount of 100 and total shipping of 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct message for total amount of 10 and total shipping of 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });
});

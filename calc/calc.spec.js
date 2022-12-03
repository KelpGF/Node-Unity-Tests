const { expect } = require('chai');
const sinon = require('sinon');
const calcModule = require('./calc');

describe('Module Calc test', () => {
	it('should sum return 4', (done) => {
		const mock = sinon.mock(calcModule);

		mock.expects('sum').yields(null, 4);

		calcModule.sum(2, 2, (err, result) => {
			mock.verify();
			mock.restore();

			expect(result).to.equal(4);
			done();
		});
	});

	it('stub fn', (done) => {
		const stub = sinon.stub(calcModule, 'sum');

		stub.returns(10);

		const result = calcModule.sum(1, 2);

		expect(result).to.equal(10);

		stub.restore();

		done();
	});
});

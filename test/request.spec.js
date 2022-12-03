const chaiHttp = require('chai-http');
const chai = require('chai');
chai.use(chaiHttp);

const { request, expect } = chai;

describe('HTTP Requests Test', () => {
	let res = {};

	beforeEach((done) => {
		request('www.schoolofnet.com')
			.get('/')
			.end((err, response) => {
				res = response;
				done();
			});
	});

	it('should request successful', (done) => {
		expect(res).to.have.status(200);
		done();
	});

	it('should have body not null', (done) => {
		expect(res.body).to.not.equal(null);
		done();
	});

	afterEach((done) => {
		res = {};
		done();
	});
});

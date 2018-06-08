import {expect} from 'chai';

require('./index');
import {hour} from "./duration";

describe('Date', function() {
	describe('#add()', function() {
		it('should add a time', function() {
			const dt1 = new Date(2018, 5, 2);
			const dt2 = new Date(2018, 5, 2);
			dt1.add(hour * 2);
			expect(dt1.getTime() - dt2.getTime()).to.equal(1000*60*60*2)
		});

		it('should add a negative time', function() {
			const dt1 = new Date(2018, 5, 2);
			const dt2 = new Date(2018, 5, 2);
			dt1.add(-hour * 2);
			expect(dt1.getTime() - dt2.getTime()).to.equal(-1000*60*60*2)
		});
	});

	describe('#since()', function() {
		it('should return 1 day difference', function() {
			const dt1 = new Date(2018, 5, 2);
			const dt2 = new Date(2018, 5, 1);
			expect(dt1.since(dt2).days).to.equal(1)
		});
	});
});

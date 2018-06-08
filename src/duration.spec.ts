import {expect} from 'chai';
import * as time from "./duration";
import {duration} from "./duration";

const Duration = time.Duration;

describe('Duration', function() {
	describe('#duration', function () {
		const dtA = new Date(2018, 5, 1, 1);
		const dtB = new Date(2018, 5, 1, 4);
		const d = duration(dtB.valueOf() - dtA.valueOf());
		expect(d.hours).to.equal(3);
	});

	describe('#seconds()', function() {
		it('should return a round number', function() {
			const duration = new Duration(5000);
			expect(duration.seconds).to.equal(5)
		});

		it('should return a float number with seconds', function() {
			const duration = new Duration(5500);
			expect(duration.seconds).to.equal(5.5)
		});
	});

	describe('#minutes()', function() {
		it('should return a round number', function() {
			const duration = new Duration(60000);
			expect(duration.minutes).to.equal(1)
		});

		it('should return a float', function() {
			const duration = new Duration(90000);
			expect(duration.minutes).to.equal(1.5)
		});
	});

	describe('#hours()', function() {
		it('should return a round number', function() {
			const duration = new Duration(60000*60);
			expect(duration.hours).to.equal(1)
		});

		it('should return a float', function() {
			const duration = new Duration(60000*90);
			expect(duration.hours).to.equal(1.5)
		});
	});

	describe('#days()', function() {
		it('should return a round number', function() {
			const duration = new Duration(60000*60*24);
			expect(duration.days).to.equal(1)
		});

		it('should return a float', function() {
			const duration = new Duration(60000*60*36);
			expect(duration.days).to.equal(1.5)
		});
	});

	describe('#add()', function() {
		it('should return a round number', function() {
			let duration = new Duration(time.second * 3);
			duration.add(time.second)
			expect(duration.seconds).to.equal(4)
		});
	});
});

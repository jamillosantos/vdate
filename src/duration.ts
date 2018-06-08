
export class Duration {
	private t:number;

	constructor(time: DurationCalc)
	{
		this.t = time | 0;
	}

	/**
	 * valueOf returns the time keept by this instance in milliseconds.
	 *
	 * This method is defined in order to get the nice feature of this
	 * object is used as part of numeric operations.
	 *
	 * @returns {number}
	 */
	valueOf():number {
		return this.t;
	}

	get milliseconds():number {
		return this.t;
	}

	get seconds():number {
		return this.t / 1000;
	}

	get minutes():number {
		return this.t / 1000 / 60;
	}

	get hours():number {
		return this.t / 1000 / 60 / 60;
	}

	get days():number {
		return this.t / 1000 / 60 / 60 / 24;
	}

	add(d:DurationCalc) {
		this.t += d;
	}
}

export type DurationCalc = (Duration|any);

export const duration = (d:DurationCalc):Duration => (new Duration(d));

export const millisecond:DurationCalc = new Duration(1);
export const second:DurationCalc = new Duration(millisecond * 1000);
export const minute:DurationCalc = new Duration(second * 60);
export const hour:DurationCalc = new Duration(minute * 60);
export const day:DurationCalc = new Duration(hour * 24);

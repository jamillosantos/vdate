import {duration, Duration, DurationCalc} from "./duration";

export {
	duration, Duration
};

declare global {
	interface Date {
		add(d:DurationCalc):void;
		since(d:Date):Duration;
	}
}

/**
 * add increments by `d` the date/time contained on this date.
 *
 * If you need to subtract, instead of sum, try to `-d` instead.
 *
 * @param {DurationCalc} d Amount that will be added to the date.
 */
Date.prototype.add = function (d: DurationCalc)
{
	this.setTime(this.getTime() + d);
};

/**
 * since returns the duration since the parameter `d`.
 *
 * @param {DurationCalc} d Amount that will be added to the date.
 */
Date.prototype.since = function (d: DurationCalc):Duration
{
	return duration(this - d);
};

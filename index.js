'use strict'

module.exports = keepInRange;

/**
 * Check if a given number is inside the range of two numbers, the result is limited by the ranges. Also works with decimal numbers
 *
 * @param {Number} value
 * @param {Number} minValue
 * @param {Number} maxValue
 * @returns {Number}
 * @example
 * var value = keepinrange(50,100,200);
 * //=> 100
 * var value = keepinrange(150,100,200);
 * //=> 150
 * var value = keepinrange(300,100,200);
 * //=> 200
 */
function keepInRange(value, minValue, maxValue) {
    return (value < minValue) ? minValue : (value > maxValue) ? maxValue : value;
}
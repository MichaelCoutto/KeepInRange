'use strict'

module.exports = keepInRange;

/**
 * Check if a given number is inside the range of two numbers, the result is limited by the ranges
 *
 * @param {Int} value
 * @param {Int} minValue
 * @param {Int} maxValue
 * @returns
 */
function keepInRange(value, minValue, maxValue) {
    return (value < minValue) ? minValue : (value > maxValue) ? maxValue : value;
}
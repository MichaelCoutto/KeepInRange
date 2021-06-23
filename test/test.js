const assert = require('assert');
const keepInRange = require("../index");

describe("Keep In Range", function() {
    describe('Testing Range Between 100 ~ 200', function() {

        it("Should return 100 when the value is less than the minimum", function() {
            assert.strictEqual(keepInRange(50, 100, 200), 100);
        });

        it("Should return 100 when the value is equal the minimum", function() {
            assert.strictEqual(keepInRange(100, 100, 200), 100);
        });

        it("Should return 150 since is between the min and the max.", function() {
            assert.strictEqual(keepInRange(150, 100, 200), 150);
        });

        it("Should return 200 since the selected value is equal than the max.", function() {
            assert.strictEqual(keepInRange(200, 100, 200), 200);
        });

        it("Should return 200 since the value is higher than the max.", function() {
            assert.strictEqual(keepInRange(250, 100, 200), 200);
        });

        it("Should return -5.12", function() {
			assert.strictEqual(keepInRange(-5.12, -10, 10), -5.12);
		});

    });

});
const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.
    
    test("Function is called with two positive integers. ", () => {
        const result = multiply(2, 8);
        expect(result).toBe(16);
    });

    test("The value returned should be the result of the multiplication of both values.", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });
    
    test("The value returned should be the result of the multiplication of both values.", () => {
        const result = multiply(3, 2);
        expect(result).toBe(6);
    });

    test("The value returned should be 0 (any number multiplied by 0 equals 0", () => {
        const result = multiply(0, 1);
        expect(result).toBe(0)
    });
});
// tests/index.test.js
const add = require('../src/index'); // Import the add function

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(add("1,2")).toBe(3);
        expect(add("2,3")).toBe(5);
    });

    test('should handle new line as a delimiter', () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("4\n5\n6")).toBe(15);
    });

    test('should support custom delimiters', () => {
        expect(add("//;\\n1;2")).toBe(3);
        expect(add("//|\\n1|2|3")).toBe(6);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
});

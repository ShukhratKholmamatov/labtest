import { addNums, divideNums } from './index';

describe('addNums', () => {
    test('adds positive numbers', () => {
        expect(addNums(3, 4)).toBe(7);
    });

    test('throws error for invalid input', () => {
        expect(() => addNums(3, null as any)).toThrow('Invalid input');
    });
});

describe('divideNums', () => {
    test('divides numbers correctly', () => {
        expect(divideNums(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divideNums(5, 0)).toThrow('Cannot divide by zero');
    });
});

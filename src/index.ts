export function addNums(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input');
    }
    return a + b;
}

export function divideNums(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

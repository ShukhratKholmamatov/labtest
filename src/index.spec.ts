// src/index.spec.ts
import { addNums } from './index';

test('adds two numbers', () => {
  expect(addNums(0, 5)).toBe(5);
  expect(addNums(-5, 0)).toBe(-5);
});

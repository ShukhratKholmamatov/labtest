"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.spec.ts
const index_1 = require("./index"); // curly braces are required for named export
test('adds two numbers', () => {
    expect((0, index_1.addNums)(0, 5)).toBe(5);
    expect((0, index_1.addNums)(-5, 0)).toBe(-5);
});

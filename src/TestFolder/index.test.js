import { describe, test, expect } from "@jest/globals";

// Simple arithmetic functions to test
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};
const modulo = (a, b) => a % b;

describe("Arithmetic Operations", () => {
  test("Addition of two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
  });

  test("Subtraction of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  test("Multiplication of two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test("Division of two numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(1, 0)).toThrow("Division by zero");
  });

  test("Modulo of two numbers", () => {
    expect(modulo(5, 2)).toBe(1);
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(5, 5)).toBe(0);
  });

  test("Addition of multiple numbers", () => {
    expect(add(add(1, 2), 3)).toBe(6); // 1 + 2 + 3
    expect(add(add(-1, -2), -3)).toBe(-6); // -1 + (-2) + (-3)
  });

  test("Multiplication of multiple numbers", () => {
    expect(multiply(multiply(2, 3), 4)).toBe(24); // 2 * 3 * 4
    expect(multiply(multiply(-2, 3), -4)).toBe(24); // -2 * 3 * -4
  });
});

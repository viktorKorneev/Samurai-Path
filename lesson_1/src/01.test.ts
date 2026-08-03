import { sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 3;
  b = 1;
  c = 16;
});

test("sum should be correct", () => {
  const result1 = sum(a, b);
  const result2 = sum(a, c);

  expect(result1).toBe(7);
  expect(result2).toBe(12);
});

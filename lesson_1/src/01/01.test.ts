import { sum } from "./01.ts";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 3;
  b = 1;
  c = 16;
});

test.skip("sum should be correct", () => {
  const result1 = sum(a, b);
  const result2 = sum(a, c);

  expect(result1).toBe(4);
  expect(result2).toBe(19);
});

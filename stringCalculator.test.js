const assert = require("assert");
const { test } = require("node:test");
const { Add } = require("./stringCalculator");

test("String Calculator", async (t) => {
  await t.test("Should return 0 if input is invalid", () => {
    assert.strictEqual(Add(""), 0);
  });

  await t.test("Should handle single input", () => {
    assert.strictEqual(Add("2"), 2);
  });

  await t.test("Should handle two numbers", () => {
    assert.strictEqual(Add("2, 1"), 3);
  });

  await t.test("Should handle any amount of numbers", () => {
    assert.strictEqual(Add("1,2,3"), 6);
  });
});

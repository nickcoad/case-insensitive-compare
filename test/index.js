"use strict";

const assert = require("chai").assert;
const index = require("./../src/index");

describe("index()", function() {
  it("should return true when comparing two strings with different case", function() {
    const a = "Test";
    const b = "test";
    const expected = true;

    assert.strictEqual(index(a, b), expected);
  });

  it("should return false when comparing two strings with different characters", function() {
    const a = "Test1";
    const b = "Test2";
    const expected = false;

    assert.strictEqual(index(a, b), expected);
  });

  it("should return true when two strings are equal and same case", function() {
    const a = "Test";
    const b = "Test";
    const expected = true;

    assert.strictEqual(index(a, b), expected);
  });
});

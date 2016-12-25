const expect = require("expect");

const utils = require("utils");
const { isString, isEmpty } = require("utils");

describe("Utils", () => {
  it("should exist", () => {
    expect(utils).toExist();
  });

  describe("isString", () => {
    it("should validate string", () => {
      expect(isString("abc")).toBe(true);
    });

    it("should not validate numbers", () => {
      expect(isString(123)).toBe(false);
    });

    it("should not validate arrays", () => {
      expect(isString([1,2,3])).toBe(false);
    });

    it("should not validate objects", () => {
      expect(isString({a: "abc"})).toBe(false);
    });
  });

  describe("isEmpty", () => {
    it("should validate empty strings", () => {
      expect(isEmpty("")).toBe(true);
    });

    it("should work as negation", () => {
      expect(!isEmpty("abc")).toBe(true);
    });

    it("should not validate not empty strings", () => {
      expect(isEmpty("abc")).toBe(false);
    });

    it("should not validate numbers", () => {
      expect(isEmpty(12)).toBe(false);
    });

    it("should not validate arrays", () => {
      expect(isEmpty([1,2,3])).toBe(false);
    });
  });
});

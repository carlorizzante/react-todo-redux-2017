const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const SearchTodos = require("SearchTodos");

describe("SearchTodos", () => {
  it("should exist", () => {
    expect(SearchTodos).toExist();
  });
});

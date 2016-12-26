const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const Todo = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  describe("render", () => {
    it("should render Todo component", () => {
      const todo = TestUtils.renderIntoDocument(<Todo/>);
      const $el = $(ReactDOM.findDOMNode(todo));
      // expect($el.find("li").lenght).toBe(1);
    });
  });
});

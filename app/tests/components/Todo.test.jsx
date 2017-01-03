const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const { Todo } = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  describe("render", () => {
    it("should render Todo component", () => {
      const todo = TestUtils.renderIntoDocument(<Todo/>);
      const $el = $(ReactDOM.findDOMNode(todo));
      expect($el.find("li")).toExist();
      expect($el.find("input[type=checkbox]").length).toBe(1);
    });
  });

  describe("onToggle", () => {
    it("should dispatch TOGGLE_TODO action with correct _id on click", () => {
      const data = {
        _id: 12
      }
      const spy = expect.createSpy();
      const todo = TestUtils.renderIntoDocument(<Todo {...data} dispatch={spy}/>);
      const $el = $(ReactDOM.findDOMNode(todo));
      TestUtils.Simulate.click($el.find("input[type=checkbox]")[0]);
      expect(spy).toHaveBeenCalledWith({
        type: "TOGGLE_TODO",
        _id: data._id
      });
    });
  });
});

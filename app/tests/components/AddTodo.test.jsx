const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const AddTodo = require("AddTodo");

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  describe("onSubmit", () => {
    it("should call onSubmit with valid arguments", () => {
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      addtodo.refs.name.value = "New todo";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toHaveBeenCalledWith("New todo");
    });

    it("should not call onSubmit if not valid arguments", () => {
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });

    it("should not call onSubmit with empty argument", () => {
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      addtodo.refs.name.value = "";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});

const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const { AddTodo } = require("AddTodo");

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  describe("render", () => {
    it("should render AddTodo component", () => {
      const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={()=>{}}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      expect($el.find("#add-todo")).toExist();
      expect($el.find("input[type=text]").length).toBe(1);
      expect($el.find("button").length).toBe(1);
    });
  });

  describe("onSubmit", () => {
    it("should dispatch ADD_TODO action with valid arguments", () => {
      const action = {
        type: "ADD_TODO",
        todo: "Abc"
      }
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      addtodo.refs.name.value = "Abc";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it("should not dispatch ADD_TODOaction with not valid arguments", () => {
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });

    it("should not dispatch ADD_TODO action with empty argument", () => {
      const spy = expect.createSpy();
      const addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addtodo));
      addtodo.refs.name.value = "";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});

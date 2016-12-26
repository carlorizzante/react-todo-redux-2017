const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const TodoApp = require("TodoApp");
const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  describe("render", () => {
    it("should render TodoApp component", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      expect($el.find("#todo-app")).toExist();
    });

    it("should include SearchTodos", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, SearchTodos);
      expect(components.length).toBe(1);
      expect($el.find("#search-todos").length).toBe(1);
    });

    it("should include TodoList", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, TodoList);
      expect(components.length).toBe(1);
      expect($el.find("#todo-list").length).toBe(1);
    });

    it("should include AddTodo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, AddTodo);
      expect(components.length).toBe(1);
      expect($el.find("#add-todo").length).toBe(1);
    });
  });
});

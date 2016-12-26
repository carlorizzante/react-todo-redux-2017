const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");
const uuid = require("node-uuid");

const TodoApp = require("TodoApp");
const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");
const Todo = require("Todo");

const todos = [
  {
    _id: uuid(),
    isActive: false,
    text: "irure sint ullamco et tempor"
  },{
    _id: uuid(),
    isActive: true,
    text: "esse esse ut minim consequat"
  },{
    _id: uuid(),
    isActive: false,
    text: "occaecat id incididunt ullamco exercitation"
  },{
    _id: uuid(),
    isActive: true,
    text: "cupidatat consequat Lorem nisi veniam"
  },{
    _id: uuid(),
    isActive: true,
    text: "occaecat officia enim laborum fugiat"
  }
];

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

    it("should render a Todo component for each todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      todoapp.state.todos = todos;
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, Todo);
      expect(components.length).toBe(todos.length);
      expect($el.find("#todo-list li").length).toBe(todos.length);
    });
  });

  describe("handleNewTodo", () => {
    it("should add new todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      todoapp.state.todos = todos;
      todoapp.handleNewTodo("Some text");
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, Todo);
      expect(components.length).toBe(todos.length + 1);
      expect($el.find("#todo-list li").length).toBe(todos.length + 1);
      expect(todoapp.state.todos.length).toBe(todos.length + 1);
    });

    it("should correctly set properties on new todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const $el = $(ReactDOM.findDOMNode(todoapp));
      todoapp.state.todos = todos;
      const last = todos.length;
      todoapp.handleNewTodo("Some text");
      expect(todoapp.state.todos[last]._id).toBeA("string");
      expect(todoapp.state.todos[last].isActive).toBeA("boolean");
      expect(todoapp.state.todos[last].text).toBe("Some text");
    });
  });
});

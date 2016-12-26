const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");
const uuid = require("node-uuid");

const TodoList = require("TodoList");
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

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  describe("render", () => {
    it("should render TodoList component", () => {
      const todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      const $el = $(ReactDOM.findDOMNode(todolist));
      expect($el.find("#todo-list")).toExist();
    });

    it("should render one Todo component for each todo item", () => {
      const todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      const components = TestUtils.scryRenderedComponentsWithType(todolist, Todo);
      expect(components.length).toBe(todos.length);
    });
  });
});

const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const TodoList = require("TodoList");
const Todo = require("Todo");

const todos = [
  {
    "_id": "585ec7360ff3683a6ecd97a3",
    "isActive": false,
    "text": "irure sint ullamco et tempor"
  },{
    "_id": "585ec736d034996708954cd7",
    "isActive": true,
    "text": "esse esse ut minim consequat"
  },{
    "_id": "585ec73620b504bf6fda6263",
    "isActive": false,
    "text": "occaecat id incididunt ullamco exercitation"
  },{
    "_id": "585ec7368f015b25d7b7ad5c",
    "isActive": true,
    "text": "cupidatat consequat Lorem nisi veniam"
  },{
    "_id": "585ec736b539fad66477c937",
    "isActive": true,
    "text": "occaecat officia enim laborum fugiat"
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
      const todos_components = TestUtils.scryRenderedComponentsWithType(todolist, Todo);
      expect(todos_components.length).toBe(todos.length);
    });
  });
});

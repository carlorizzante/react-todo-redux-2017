const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");

const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");
const uuid = require("node-uuid");

import { configure } from "store";
import ConnectedTodoList, { TodoList } from "TodoList";
import ConnectedTodo, { Todo } from "Todo";

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  let todos;
  let provider;

  beforeEach(() => {
    todos = [
      {
        _id: uuid(),
        text: "irure sint ullamco et tempor",
        completed: false,
        completedAt: 123,
        createdAt: 123
      },{
        _id: uuid(),
        text: "esse esse ut minim consequat",
        completed: true,
        completedAt: 123,
        createdAt: 123
      }
    ];
    const show_completed = true;
    const _store = configure({ todos, show_completed });
    provider = TestUtils.renderIntoDocument(
      <Provider store={_store}>
        <ConnectedTodoList/>
      </Provider>
    );
  });

  describe("render", () => {
    it("should render TodoList component", () => {
      const todolist = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList);
      expect(todolist.length).toBe(1);
    });

    it("should render one Todo component for each todo item", () => {
      const todolist = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      const components = TestUtils.scryRenderedComponentsWithType(todolist, ConnectedTodo);
      expect(components.length).toBe(todos.length);
    });

    it("should render default msg is no todos", () => {
      const todos = []; // no todos!!
      const todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      const $el = $(ReactDOM.findDOMNode(todolist));
      expect($el.find("#default-msg")).toExist();
      expect($el.find("li").length).toBe(1);
    });
  });
});

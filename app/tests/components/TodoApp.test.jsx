const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");

const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");
const uuid = require("node-uuid");

const store = require("store");

const TodoApp = require("TodoApp");
import SearchTodos from "SearchTodos";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
const Todo = require("Todo");

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  // let todos;
  let provider;

  beforeEach(() => {
    const _store = store.configure();
    provider = TestUtils.renderIntoDocument(
      <Provider store={_store}>
        <TodoApp/>
      </Provider>
    );
    // todos = [
    //   {
    //     _id: uuid(),
    //     completed: true,
    //     text: "abc"
    //   }, {
    //     _id: uuid(),
    //     completed: false,
    //     text: "bCd"
    //   }, {
    //     _id: uuid(),
    //     completed: true,
    //     text: "deF"
    //   }
    // ];
  })

  describe("render", () => {
    it("should render TodoApp component", () => {
      const todoapp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp);
      expect(todoapp.length).toBe(1);
    });

    it("should include SearchTodos", () => {
      const todoapp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      const searchtodos = TestUtils.scryRenderedComponentsWithType(todoapp, SearchTodos);
      expect(searchtodos.length).toBe(1);
    });

    it("should include TodoList", () => {
      const todoapp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      const todolist = TestUtils.scryRenderedComponentsWithType(todoapp, TodoList);
      expect(todolist.length).toBe(1);
    });

    it("should include AddTodo", () => {
      const todoapp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      const addtodo = TestUtils.scryRenderedComponentsWithType(todoapp, AddTodo);
      expect(addtodo.length).toBe(1);
    });

    // it("should render Todo components into TodoList", () => {
    //   const todolist = TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
    //   const todos = TestUtils.scryRenderedComponentsWithType(todolist, Todo);
    //   expect(todos.length).toBe(3);
    // });
  });
});

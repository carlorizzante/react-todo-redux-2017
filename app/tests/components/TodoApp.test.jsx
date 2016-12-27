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

let todos;

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  beforeEach(() => {
    todos = [
      {
        _id: uuid(),
        completed: true,
        text: "abc"
      }, {
        _id: uuid(),
        completed: false,
        text: "bCd"
      }, {
        _id: uuid(),
        completed: true,
        text: "deF"
      }
    ];
  })

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
      const show_completed = true; // display all todos
      todoapp.setState({todos, show_completed});
      const components = TestUtils.scryRenderedComponentsWithType(todoapp, Todo);
      expect(components.length).toBe(todos.length);
      expect($el.find("#todo-list li").length).toBe(todos.length);
    });
  });

  describe("handleNewTodo", () => {
    it("should add new todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoapp.setState({todos});
      todoapp.handleNewTodo("Some text");
      const todoapp_todos_length = todoapp.state.todos.length;
      expect(todoapp.state.todos.length).toBe(todos.length + 1);
    });

    it("should correctly set properties on new todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoapp.setState({todos});
      todoapp.handleNewTodo("Some text");
      const last = todoapp.state.todos.length - 1;
      expect(todoapp.state.todos[last]._id).toBeA("string");
      expect(todoapp.state.todos[last].completed).toBeA("boolean");
      expect(todoapp.state.todos[last].text).toBe("Some text");
      expect(todoapp.state.todos[last].createdAt).toBeA("number");
    });
  });

  describe("handleTodoToggle", () => {
    it("should toggle completed on a specific (randomized) todo", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoapp.setState({todos});
      const random_todo = Math.floor(Math.random() * (todos.length)); // Pick up a random todo and stick with it
      const value = todos[random_todo].completed;
      todoapp.handleTodoToggle(todoapp.state.todos[random_todo]._id);
      expect(todoapp.state.todos[random_todo].completed).toBeA("boolean");
      expect(todoapp.state.todos[random_todo].completed).toBe(!value);
    });

    it("should set completedAt when toggle todo as completed", () => {
      const todos = [
        {
          _id: uuid(),
          completed: false,
          text: "Some text"
        }
      ];
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoapp.setState({todos});
      todoapp.handleTodoToggle(todos[0]._id);
      expect(todoapp.state.todos[0].completedAt).toBeA("number");
    });

    it("should unset completedAt when toggle todo as not completed", () => {
      const todos = [
        {
          _id: uuid(),
          completed: true,
          text: "Some text",
          completedAt: 123
        }
      ];
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoapp.setState({todos});
      todoapp.handleTodoToggle(todos[0]._id);
      expect(todoapp.state.todos[0].completedAt).toNotExist();
      expect(todoapp.state.todos[0].completedAt).toBe(null);
    });
  });

  describe("filterTodos", () => {
    // it("should display all todos if show_completed checked", () => {
    //   const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
    //   const show_completed = true; // display all todos
    //   todoapp.setState({todos, show_completed});
    //   const $el = $(ReactDOM.findDOMNode(todoapp));
    //   const components = TestUtils.scryRenderedComponentsWithType(todoapp, Todo);
    //   expect(components.length).toBe(todos.length);
    //   expect($el.find("#todo-list li").length).toBe(todos.length);
    // });

    it("should return all todos when show_completed true", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = true; // display all todos
      const filteredTodos = todoapp.filterTodos(todos, show_completed);
      expect(filteredTodos.length).toBe(todos.length);
    });

    // it("should display only not completed todos if show_completed unchecked", () => {
    //   const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
    //   const show_completed = false;
    //   todoapp.setState({todos, show_completed});
    //   const $el = $(ReactDOM.findDOMNode(todoapp));
    //   const components = TestUtils.scryRenderedComponentsWithType(todoapp, Todo);
    //   const filteredTodos = todos.filter(todo => !todo.completed);
    //   expect(components.length).toBe(filteredTodos.length);
    //   expect($el.find("#todo-list li").length).toBe(filteredTodos.length);
    // });

    it("shold return only not completed todos when show_completed false", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = false; // display only not completed todos
      const filteredTodos = todoapp.filterTodos(todos, show_completed);
      expect(filteredTodos.length).toBe(1);
    });

    it("should sort by completed", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = true;
      const filteredTodos = todoapp.filterTodos(todos, show_completed)
      expect(filteredTodos[0].text).toBe(todos[1].text);
    });

    it("should filter by search_text", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = true;
      const search_text = "abc";
      const filteredTodos = todoapp.filterTodos(todos, show_completed, search_text);
      expect(filteredTodos.length).toBe(1);
    });

    it("should ignore uppercase while filtering by text", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = false;
      const search_text = "Bc";
      const filteredTodos = todoapp.filterTodos(todos, show_completed, search_text);
      expect(filteredTodos.length).toBe(1);
    });

    it("should filter by completed and search_text", () => {
      const todoapp = TestUtils.renderIntoDocument(<TodoApp/>);
      const show_completed = true;
      const search_text = "Bc";
      const filteredTodos = todoapp.filterTodos(todos, show_completed, search_text);
      expect(filteredTodos.length).toBe(2);
    });
  });
});

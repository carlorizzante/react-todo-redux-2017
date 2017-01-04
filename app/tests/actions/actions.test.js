const expect = require("expect");
const uuid = require("node-uuid");

const actions = require("actions");
const {
  setSearchText,
  addTodo,
  toggleTodo,
  toggleShowCompleted,
  addTodos
} = actions;

describe("Actions", () => {
  it("should exist", () => {
    expect(actions).toExist();
  });

  describe("setSearchText", () => {
    it("should generate action with search text", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        search_text: "Abc"
      }
      const res = setSearchText("Abc");
      expect(res).toEqual(action);
      expect(res.search_text).toBeA("string");
    });
  });

  describe("showCompletedTodos", () => {
    it("should generate action", () => {
      const action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }
      const res = toggleShowCompleted();
      expect(res).toEqual(action);
    });
  });

  describe("addTodo", () => {
    it("should generate action with todo text", () => {
      const action = {
        type: "ADD_TODO",
        todo: "Abc"
      }
      const res = addTodo("Abc");
      expect(res).toEqual(action);
      expect(res.todo).toBeA("string");
    });
  });

  describe("toggleTodo", () => {
    it("should generate action with todo _id", () => {
      const action = {
        type: "TOGGLE_TODO",
        _id: 12
      }
      const res = toggleTodo(12);
      expect(res).toEqual(action);
      expect(res._id).toExist(); // String or number
    });
  });

  describe("addTodos", () => {
    it("should generate action with todos array", () => {
      const todos = [
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
      const action = {
        type: "ADD_TODOS",
        todos
      }
      const res = addTodos(todos);
      expect(res).toEqual(action);
      expect(res.todos).toBeA("array");
    });
  });
});

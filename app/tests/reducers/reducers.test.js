const expect = require("expect");
const df = require("deep-freeze-strict");

const reducers = require("reducers");
const {
  setSearchTextReducer,
  toggleShowCompletedReducer,
  todosReducer
} = reducers;

describe("Reducers", () => {
  it("should exist", () => {
    expect(reducers).toExist();
  });

  describe("setSearchTextReducer", () => {
    it("should set search_text", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        search_text: "Abc"
      }
      const res = setSearchTextReducer("", df(action));
      expect(res).toBe("Abc");
    });
  });

  describe("toggleShowCompletedReducer", () => {
    it("should toggle show_completed", () => {
      expect(toggleShowCompletedReducer(false, { type: "TOGGLE_SHOW_COMPLETED" }))
        .toBe(true);
      expect(toggleShowCompletedReducer(true, { type: "TOGGLE_SHOW_COMPLETED" }))
        .toBe(false);
    });
  });

  describe("addTodoReducer", () => {
    it("should add a new todo to an empty list of todos", () => {
      const todos = [];
      const action = {
        type: "ADD_TODO",
        todo: "Abc"
      }
      const res = todosReducer(todos, action);
      expect(res.length).toBe(1);
      expect(res[0]._id).toBeA("string");
      expect(res[0].text).toBe("Abc");
      expect(res[0].completed).toBe(false);
      expect(res[0].createdAt).toBeA("number");
    });
  });

  describe("todosReducer", () => {
    it("should add a new todo to list of todos", () => {
      const todos = [
        {
          _id: 12,
          completed: false,
          text: "Random text",
          createdAt: 1234
        }
      ];
      const action = {
        type: "ADD_TODO",
        todo: "Abc"
      }
      const res = todosReducer(todos, action);
      expect(res.length).toBe(2);
      expect(res[1]._id).toBeA("string");
      expect(res[1].text).toBe("Abc");
      expect(res[1].completed).toBe(false);
      expect(res[1].createdAt).toBeA("number");
    });
  });

  it("should toggle completed", () => {
    const todos = [
      {
        _id: 12,
        completed: false,
        text: "Random text",
        createdAt: 1234
      }, {
        _id: 17,
        completed: false,
        text: "Random text",
        createdAt: 5647
      }
    ];
    const res1 = todosReducer(todos, { type: "TOGGLE_TODO", _id: 17 });
    expect(res1[1].completed).toBe(true);
    expect(res1[1].completedAt).toBeA("number");
    const res2 = todosReducer(todos, { type: "TOGGLE_TODO", _id: 17 });
    expect(res2[1].completed).toBe(false);
    expect(res2[1].completedAt).toBe(null);
  });

});
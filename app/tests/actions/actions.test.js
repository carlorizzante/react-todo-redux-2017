const expect = require("expect");

const actions = require("actions");
const { setSearchText, addTodo, toggleTodo, toggleShowCompleted } = actions;

describe("Actions", () => {
  it("should exist", () => {
    expect(actions).toExist();
  });

  describe("setSearchText", () => {
    it("should generate action with search test", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        search_text: "Abc"
      }
      const res = setSearchText("Abc");
      expect(res).toEqual(action);
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
    });
  });
});

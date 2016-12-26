const expect = require("expect");
const uuid = require("node-uuid");

const TodoAPI = require("TodoAPI");

const todos = [
  {
    _id: uuid(),
    completed: false,
    text: "Abc"
  },{
    _id: uuid(),
    completed: true,
    text: "Def"
  },{
    _id: uuid(),
    completed: false,
    text: "Ghi"
  },
];

describe("TodoAPI", () => {
  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  beforeEach(() => {
    localStorage.removeItem("todos");
  });

  describe("setTodos", () => {
    it("should save valid todos", () => {
      TodoAPI.setTodos(todos);
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      expect(savedTodos).toEqual(todos);
    });

    it("should not save invalid data", () => {
      TodoAPI.setTodos("asjd{]);sd");
      expect(localStorage.getItem("todos")).toNotBe();
    });

    it("should not overwrite with invalid data", () => {
      localStorage.setItem("todos", JSON.stringify(todos));
      TodoAPI.setTodos("askhd(}];)");
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      expect(savedTodos).toEqual(todos);
    });
  });

  describe("getTodos", () => {
    it("should return valid todos", () => {
      localStorage.setItem("todos", JSON.stringify(todos));
      const savedTodos = TodoAPI.getTodos();
      expect(savedTodos).toEqual(todos);
    });

    it("should return an empty array if no todos", () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it("should return an empty array if invalid data", () => {
      localStorage.setItem("todos", "{](]aa;;}");
      expect(TodoAPI.getTodos()).toEqual([]);
    });
  });
});

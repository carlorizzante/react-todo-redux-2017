const uuid = require("node-uuid");

const { isArray } = require("utils");

const TodoAPI = {

  setTodos: (todos) => {
    if (!isArray(todos)) return;
    localStorage.setItem("todos", JSON.stringify(todos));
    return todos;
  },

  getTodos: () => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      if (isArray(todos)) return todos;
    } catch(e) {
      return [];
    }
  }
}

module.exports = TodoAPI;

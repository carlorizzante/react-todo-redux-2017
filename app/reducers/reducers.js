const uuid = require("node-uuid");
const moment = require("moment");

export const setSearchTextReducer = (search_text = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.search_text;
      break;
    default:
      return search_text;

  }
}

export const toggleShowCompletedReducer = (show_completed = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !show_completed;
      break;
    default:
      return show_completed;
  }
}

export const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          _id: uuid(),
          completed: false,
          text: action.todo,
          createdAt: moment().unix()
        }
      ];
      break;
      case "TOGGLE_TODO":
        return todos.map(todo => {
          if (todo._id == action._id) todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : null;
          return todo;
        });
        break;
    default:
      return todos;
  }
}

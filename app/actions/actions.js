export const setSearchText = search_text => ({
  type: "SET_SEARCH_TEXT",
  search_text
});

export const toggleShowCompleted = () => ({
  type: "TOGGLE_SHOW_COMPLETED"
});

export const addTodo = todo => ({
  type: "ADD_TODO",
  todo
});

export const toggleTodo = (_id) => ({
  type: "TOGGLE_TODO",
  _id
});

export const addTodos = todos => ({
  type: "ADD_TODOS",
  todos
});

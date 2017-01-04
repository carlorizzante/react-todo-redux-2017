const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");
const { Provider } = require("react-redux");

const TodoApp = require("TodoApp");
const TodoAPI = require("TodoAPI");

// const actions = require("actions");
const { addTodos } = require("actions");
const store = require("store").configure();

// Load Foundation css
// require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

// Populate with one initial Todo before loading from local storage
// store.dispatch(actions.addTodo("Clean."));

store.subscribe(() => {
  const state = store.getState();
  console.log("Current state", state);
  TodoAPI.setTodos(state.todos);
});

// Load Todos from LocalStorage
const initialTodos = TodoAPI.getTodos();
console.log(initialTodos);
store.dispatch(addTodos(initialTodos));

// store.dispatch(actions.addTodo("Clean 2."));
// store.dispatch(actions.setSearchText("Abc"));
// store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);

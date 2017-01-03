const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");
const { Provider } = require("react-redux");

const TodoApp = require("TodoApp");

const actions = require("actions");
const store = require("store").configure();

// console.log(store);
// store.subscribe(() => {
//   console.log("New state:", store.getState());
// });
// store.dispatch(actions.addTodo("Clean."));
// store.dispatch(actions.addTodo("Clean 2."));
// store.dispatch(actions.setSearchText("Abc"));
// store.dispatch(actions.toggleShowCompleted());

// Load Foundation css
// require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);

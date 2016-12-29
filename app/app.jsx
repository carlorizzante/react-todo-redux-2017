const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");

const TodoApp = require("TodoApp");
const actions = require("actions");

// Load Foundation css
// require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app")
);

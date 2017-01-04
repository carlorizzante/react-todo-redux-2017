const React = require("react");

import SearchTodos from "SearchTodos";
import TodoList from "TodoList";
import AddTodo from "AddTodo";

const { isEmpty } = require("utils");

const TodoApp = React.createClass({
  render: function() {
    return (
      <div id="todoapp" className="row">
        <div className="columns small-centered small-11 medium-7 large-5">
          <h1 className="page-title text-center">Todo App</h1>
          <div className="container">
            <SearchTodos/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;

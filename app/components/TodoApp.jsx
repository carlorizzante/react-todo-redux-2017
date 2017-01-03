const React = require("react");
const uuid = require("node-uuid");
const moment = require("moment");

// const TodoAPI = require("TodoAPI");

import SearchTodos from "SearchTodos";
import TodoList from "TodoList";
import AddTodo from "AddTodo";

const { isEmpty } = require("utils");

const TodoApp = React.createClass({
  // getInitialState: function() {
  //   return {
  //     search_text: "",
  //     show_completed: false, // changed from null to false
  //     todos: TodoAPI.getTodos()
  //   };
  // },
  // componentDidUpdate: function () {
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleNewTodo: function(todo) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         _id: uuid(),
  //         completed: false,
  //         text: todo,
  //         createdAt: moment().unix()
  //       }
  //     ]
  //   });
  // },
  // handleSearch: function(search_state) {
  //   const { search_text, show_completed } = search_state;
  //   this.setState({
  //     search_text,
  //     show_completed
  //   });
  // },
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

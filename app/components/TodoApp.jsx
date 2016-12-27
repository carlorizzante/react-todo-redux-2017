const React = require("react");
const uuid = require("node-uuid");
const moment = require("moment");

const TodoAPI = require("TodoAPI");

const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

const { isEmpty } = require("utils");

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      search_text: "",
      show_completed: null,
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleNewTodo: function(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          _id: uuid(),
          completed: false,
          text: todo,
          createdAt: moment().unix()
        }
      ]
    });
  },
  handleSearch: function(search_state) {
    const { search_text, show_completed } = search_state;
    this.setState({
      search_text,
      show_completed
    });
  },
  handleTodoToggle: function(_id) {
    const todos = this.state.todos.map(todo => {
      if (todo._id === _id) todo.completed = !todo.completed;
      todo.completedAt = todo.completed ? moment().unix() : null;
      return todo;
    });
    this.setState({
      todos: todos
    });
  },
  filterTodos: function(todos, show_completed, search_text) {

    return todos
      // filter by show_completed
      .filter(todo => !todo.completed || show_completed)

      // filter by search_text
      .filter(todo => !search_text || todo.text.toLowerCase().indexOf(search_text.toLowerCase()) != -1)

      // sort by completed (beware of undefined vs null vs booleans)
      .sort((a, b) => a.completed - b.completed);
  },
  render: function() {
    const { todos, show_completed, search_text } = this.state;
    const filteredTodos = this.filterTodos(todos, show_completed, search_text);
    return (
      <div id="todoapp" className="row">
        <div className="columns small-12 small-centered medium-8 large-6">
          <h1 className="page-title text-center">Todo App</h1>
          <SearchTodos onSearch={this.handleSearch}/>
          <TodoList todos={filteredTodos} onTodoToggle={this.handleTodoToggle}/>
          <AddTodo onSubmit={this.handleNewTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;

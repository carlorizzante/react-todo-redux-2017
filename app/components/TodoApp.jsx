const React = require("react");
const uuid = require("node-uuid");

const TodoAPI = require("TodoAPI");

const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      search_text: null,
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
          text: todo
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
      return todo;
    });
    this.setState({
      todos: todos
    });
  },
  render: function() {
    const { todos } = this.state;
    return (
      <div id="todoapp" className="row">
        <div className="columns small-12 small-centered medium-8 large-6">
          <h1 className="page-title text-center">Todo App</h1>
          <SearchTodos onSearch={this.handleSearch}/>
          <TodoList todos={todos} onTodoToggle={this.handleTodoToggle}/>
          <AddTodo onSubmit={this.handleNewTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;

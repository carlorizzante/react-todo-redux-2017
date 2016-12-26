const React = require("react");
const uuid = require("node-uuid");

const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

const TodoApp = React.createClass({
  getInitialState: function() {
    // [
    //   '{{repeat(5, 5)}}',
    //   {
    //     _id: '{{objectId()}}',
    //     isActive: '{{bool()}}',
    //     text: '{{lorem(5, "words")}}'
    //   }
    // ]
    return {
      search_text: null,
      show_completed: null,
      todos: [
        {
          _id: uuid(),
          completed: false,
          text: "irure sint ullamco et tempor"
        },{
          _id: uuid(),
          completed: true,
          text: "esse esse ut minim consequat"
        },{
          _id: uuid(),
          completed: false,
          text: "occaecat id incididunt ullamco exercitation"
        },{
          _id: uuid(),
          completed: true,
          text: "cupidatat consequat Lorem nisi veniam"
        },{
          _id: uuid(),
          completed: true,
          text: "occaecat officia enim laborum fugiat"
        }
      ]
    };
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
    // console.log(search_text);
    this.setState({
      search_text,
      show_completed
    });
  },
  handleTodoToggle: function(_id) {
    // console.log("Toggling todo", _id);
    const todos = this.state.todos.map(todo => {
      if (todo._id === _id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({
      todos: todos
    });
    // console.log(this.state.todos);
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

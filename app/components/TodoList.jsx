const React = require("react");

const Todo = require("Todo");

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render: function() {
    const todos = this.props.todos.map(todo => (
      <Todo key={todo._id} {...todo} onToggle={this.props.onTodoToggle}/>
    ));
    return (
      <ol id="todo-list">
        {todos}
      </ol>
    );
  }
});

module.exports = TodoList;

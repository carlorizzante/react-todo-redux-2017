const React = require("react");

const Todo = require("Todo");

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render: function() {
    const { todos } = this.props;
    const renderTodos = () => {
      if (todos && todos.length) {
        return todos.map(todo => (
          <Todo key={todo._id} {...todo} onToggle={this.props.onTodoToggle}/>
        ));
      }
      return (
        <li id="default-msg" className="todo message">
          <label><p>Nothing in here? Bummer, add some todos!</p></label>
        </li>
      );
    }
    // const todos = this.props.todos.map(todo => (
    //   <Todo key={todo._id} {...todo} onToggle={this.props.onTodoToggle}/>
    // ));
    return (
      <ul id="todo-list" className="menu vertical">
        {renderTodos()}
      </ul>
    );
  }
});

module.exports = TodoList;

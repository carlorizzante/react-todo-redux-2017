const React = require("react");
const { connect } = require("react-redux");

import Todo from "Todo";
const TodoAPI = require("TodoAPI");

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
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
    const { todos, show_completed, search_text } = this.props;
    const filteredTodos = this.filterTodos(todos, show_completed, search_text);
    const renderTodos = () => {
      if (filteredTodos && filteredTodos.length) {
        return filteredTodos.map(todo => (
          <Todo key={todo._id} {...todo}/>
        ));
      }
      return (
        <li id="default-msg" className="todo message">
          <label><p>Nothing in here? Bummer, add some todos!</p></label>
        </li>
      );
    }
    return (
      <ul id="todo-list" className="menu vertical">
        {renderTodos()}
      </ul>
    );
  }
});

export default connect(state => state)(TodoList);

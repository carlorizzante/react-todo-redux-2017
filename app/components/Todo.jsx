const React = require("react");
const { connect } = require("react-redux");
const moment = require("moment");

const actions = require("actions");

export const Todo = React.createClass({
  propTypes: {
    _id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    createdAt: React.PropTypes.number.isRequired,
    completedAt: React.PropTypes.number
  },
  onToggle: function() {
    const { dispatch } = this.props;
    const { _id } = this.props;
    dispatch(actions.toggleTodo(_id));
  },
  render: function() {
    const { _id, text, completed, createdAt, completedAt } = this.props;
    const formatTime = timestamp => moment.unix(timestamp).format("Do MMM YYYY @ h:mm a");

    const time = completed ?
      `Completed at ${formatTime(completedAt)}` :
      `Created at ${formatTime(createdAt)}`;

    const todoClass = completed ?
      "todo todo-completed" :
      "todo";

    return (
      <li id={_id} className={todoClass}>
        <label>
          <input className="todo-toggle" type="checkbox" defaultChecked={completed}
            onClick={this.onToggle}/>
          <div className="todo-content">
            <p>{text}</p>
            <p><i>{time}</i></p>
          </div>
        </label>
      </li>
    );
  }
});

export default connect()(Todo);

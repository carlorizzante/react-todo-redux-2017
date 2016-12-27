const React = require("react");
const moment = require("moment");

const Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func
  },
  onToggle: function() {
    const { _id } = this.props;
    this.props.onToggle(_id);
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
          <input className="todo-toggle" type="checkbox" defaultChecked={completed} onClick={this.onToggle}/>
          <div className="todo-content">
            <p>{text}</p>
            <p><i>{time}</i></p>
          </div>
        </label>
      </li>
    );
  }
});

module.exports = Todo;

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
    return (
      <li id={_id}>
        <label>
          <input type="checkbox" defaultChecked={completed} onClick={this.onToggle}/>
          <p>{text}</p>
          <p>{time}</p>
        </label>
      </li>
    );
  }
});

module.exports = Todo;

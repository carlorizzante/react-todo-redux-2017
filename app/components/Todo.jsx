const React = require("react");

const Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func
  },
  onToggle: function() {
    const { _id } = this.props;
    this.props.onToggle(_id);
  },
  render: function() {
    const { _id, text, completed } = this.props;
    return (
      <li id={_id}>
        <label>
          <input type="checkbox" defaultChecked={completed} onClick={this.onToggle}/>
          {text}
        </label>
      </li>
    );
  }
});

module.exports = Todo;

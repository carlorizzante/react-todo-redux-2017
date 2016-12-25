const React = require("react");

const Todo = React.createClass({
  render: function() {
    const { _id, text } = this.props;
    return (
      <li>{_id} | {text}</li>
    );
  }
});

module.exports = Todo;

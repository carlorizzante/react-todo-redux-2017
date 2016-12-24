const React = require("react");

const Todo = React.createClass({
  render: function() {
    console.log(this.props);
    const { _id, text } = this.props;
    return (
      <li>{_id} | {text}</li>
    );
  }
});

module.exports = Todo;

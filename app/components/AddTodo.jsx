const React = require("react");

const { isString, isEmpty } = require("utils");

const AddTodo = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    const todo = this.refs.name.value;
    if (todo && !isEmpty(todo) && isString(todo)) {
      this.refs.name.value = "";
      this.props.onSubmit(todo);
    }
    // this.refs.name.focus();
  },
  render: function() {
    return (
      <div id="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="name" placeholder="What to do next..."/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;

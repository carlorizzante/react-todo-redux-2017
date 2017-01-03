const React = require("react");
const { connect } = require("react-redux");

const actions = require("actions");
const { isString, isEmpty } = require("utils");

export const AddTodo = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const todo = this.refs.name.value;
    if (todo && !isEmpty(todo) && isString(todo)) {
      this.refs.name.value = "";
      dispatch(actions.addTodo(todo));
    }
    if (typeof this.refs.name.focus == "function") this.refs.name.focus();
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

export default connect()(AddTodo);

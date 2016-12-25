const React = require("react");

const SearchTodos = require("SearchTodos");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

const TodoApp = React.createClass({
  getInitialState: function() {
    // [
    //   '{{repeat(5, 5)}}',
    //   {
    //     _id: '{{objectId()}}',
    //     isActive: '{{bool()}}',
    //     text: '{{lorem(5, "words")}}'
    //   }
    // ]
    return {
      todos: [
        {
          "_id": "585ec7360ff3683a6ecd97a3",
          "isActive": false,
          "text": "irure sint ullamco et tempor"
        },{
          "_id": "585ec736d034996708954cd7",
          "isActive": true,
          "text": "esse esse ut minim consequat"
        },{
          "_id": "585ec73620b504bf6fda6263",
          "isActive": false,
          "text": "occaecat id incididunt ullamco exercitation"
        },{
          "_id": "585ec7368f015b25d7b7ad5c",
          "isActive": true,
          "text": "cupidatat consequat Lorem nisi veniam"
        },{
          "_id": "585ec736b539fad66477c937",
          "isActive": true,
          "text": "occaecat officia enim laborum fugiat"
        }
      ]
    };
  },
  handleNewTodo: function(todo) {
    // console.log("New todo received:", todo);
  },
  render: function() {
    const { todos } = this.state;
    return (
      <div id="todoapp" className="row">
        <div className="columns small-12 small-centered medium-8 large-6">
          <p>Todo App</p>
          <SearchTodos/>
          <TodoList todos={todos}/>
          <AddTodo onSubmit={this.handleNewTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;

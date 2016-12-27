const React = require("react");

const SearchTodos = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  onSubmit: function(event) {
    event.preventDefault();
    console.log("Some search is occurring...");
  },
  onChange: function() {
    const search_state = {
      search_text: this.refs.searchText.value,
      show_completed: this.refs.showCompleted.checked
    }
    this.props.onSearch(search_state);
  },
  render: function() {
    return (
      <div id="search-todos">
        <form onSubmit={this.onSubmit}>
          <input type="search" ref="searchText" placeholder="Search todo..." onChange={this.onChange}/>
          <label>
            <input ref="showCompleted" type="checkbox" onChange={this.onChange}/>
            <i>Show completed todos</i>
          </label>
        </form>
      </div>
    );
  }
});

module.exports = SearchTodos;

const React = require("react");
const { connect } = require("react-redux");

const { setSearchText, toggleShowCompleted } = require("actions");

export const SearchTodos = React.createClass({
  onSearch: function() {
    const { dispatch } = this.props;
    const search_text = this.refs.searchText.value;
    dispatch(setSearchText(search_text));
  },
  onToggle: function() {
    const { dispatch } = this.props;
    const show_completed = this.refs.showCompleted.checked;
    dispatch(toggleShowCompleted(show_completed));
  },
  render: function() {
    const { dispatch, search_text, show_completed } = this.props;
    return (
      <div id="search-todos">
        <form>
          <input type="search" ref="searchText" placeholder="Search todo..."
            value={search_text}
            onChange={this.onSearch}/>
          <label>
            <input ref="showCompleted" type="checkbox"
              checked={show_completed}
              onChange={this.onToggle}/>
            <i>Show completed todos</i>
          </label>
        </form>
      </div>
    );
  }
});

export default connect(
  // ({ search_text, show_completed}) => ({ search_text, show_completed })
  state => {
    return {
      search_text: state.search_text,
      show_completed: state.show_completed
    }
  }
)(SearchTodos);

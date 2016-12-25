const React = require("react");

const SearchTodos = React.createClass({
  render: function() {
    return (
      <div id="search-todos">
        <input id="searchText" type="search" ref="searchText" placeholder="Search todo..."/>
        <input id="searchCheck" ref="searchCheckbox" type="checkbox" /><label for="check">Show completed todos</label>
      </div>
    );
  }
});

module.exports = SearchTodos;

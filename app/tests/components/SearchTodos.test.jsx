const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

import { SearchTodos } from "SearchTodos";

describe("SearchTodos", () => {
  it("should exist", () => {
    expect(SearchTodos).toExist();
  });

  describe("render", () => {
    it("should render SearchTodos component", () => {
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos/>);
      const $el = $(ReactDOM.findDOMNode(searchtodos));
      expect($el.find("#search-todos")).toExist();
      expect($el.find("input").length).toBe(2);
      expect($el.find("input[type=search]").length).toBe(1);
      expect($el.find("input[type=checkbox]").length).toBe(1);
    });
  });

  describe("onChange", () => {
    it("should dispatch SET_SEARCH_TEXT action with entered input text", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        search_text: "abc"
      }
      const spy = expect.createSpy();
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos dispatch={spy}/>);
      searchtodos.refs.searchText.value = action.search_text;
      TestUtils.Simulate.change(searchtodos.refs.searchText);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it("should dispatch TOGGLE_SHOW_COMPLETED action when checkbox changes", () => {
      const action ={
        type: "TOGGLE_SHOW_COMPLETED"
      }
      const spy = expect.createSpy();
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos dispatch={spy}/>);
      TestUtils.Simulate.change(searchtodos.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});

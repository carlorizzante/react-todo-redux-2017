const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jquery");
const TestUtils = require("react-addons-test-utils");

const SearchTodos = require("SearchTodos");

describe("SearchTodos", () => {
  it("should exist", () => {
    expect(SearchTodos).toExist();
  });

  describe("render", () => {
    it("should render SearchTodos component", () => {
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos onSearch={()=>{}}/>);
      const $el = $(ReactDOM.findDOMNode(searchtodos));
      expect($el.find("#search-todos")).toExist();
      expect($el.find("input").length).toBe(2);
      expect($el.find("input[type=search]").length).toBe(1);
      expect($el.find("input[type=checkbox]").length).toBe(1);
    });
  });

  describe("onChange", () => {
    it("should call onChange with entered input text", () => {
      const text = "Abc";
      const spy = expect.createSpy();
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos onSearch={spy}/>);
      searchtodos.refs.searchText.value = text;
      TestUtils.Simulate.change(searchtodos.refs.searchText);
      expect(spy).toHaveBeenCalledWith({
        search_text: text.toLowerCase(),
        show_completed: false
      });
    });

    it("should call onChange with proper checked value", () => {
      const spy = expect.createSpy();
      const searchtodos = TestUtils.renderIntoDocument(<SearchTodos onSearch={spy}/>);
      searchtodos.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(searchtodos.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith({
        search_text: "",
        show_completed: true
      });
    });
  });
});

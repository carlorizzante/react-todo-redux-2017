const redux = require('redux');

const {
  setSearchTextReducer,
  toggleShowCompletedReducer,
  todosReducer
} = require("reducers");

export const configure = (initialState = {}) => {

  const reducer = redux.combineReducers({
    search_text: setSearchTextReducer,
    show_completed: toggleShowCompletedReducer,
    todos: todosReducer
  });

  // return store
  return redux.createStore( reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}

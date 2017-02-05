/**
 * Created by swapnil on 18/12/16.
 */

var  redux = require('redux');
import {searchTextReducer,showCompletedReducer,todoReducer} from 'reducers';
var thunk = require('redux-thunk').default;


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer
  });

  const store = redux.createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && redux.applyMiddleware(thunk));
  return store;
}
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/todoapp';
import * as actions from 'actions';
var store = require('configureStore').configure();
var {Provider} = require('react-redux');
var TodoApi = require('todoapi');
//
//import './../playground/firebase/index';

store.subscribe(() => {
  var state = store.getState()
  console.log('new state: ',state);
  TodoApi.setTodos(state.todos);
});

var initialTodos = TodoApi.getTodos();

store.dispatch(actions.addTodos(initialTodos));

//Load foundation 
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
 <Provider store={store}>
   <TodoApp />
 </Provider>,
 document.getElementById('app')
);
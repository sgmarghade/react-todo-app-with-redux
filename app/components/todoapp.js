/**
 * Created by swapnil on 16/12/16.
 */

import React from 'react';
import TodoList from 'todolist';
import AddToDo from 'addtodo';
import TodoSearch from 'todosearch';

var TodoApp = React.createClass({

    render(){
      return (
        <div className="row">
          <h1 className="text-center">TODO APP</h1>
          <div className="columns medium-6 large-4 small-centered">
            <TodoSearch />
            <TodoList/>
            <AddToDo/>
          </div>
        </div>
      );
    }
});

export default TodoApp;
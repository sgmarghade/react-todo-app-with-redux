/**
 * Created by swapnil on 16/12/16.
 */

import React from 'react';
import {connect}  from 'react-redux';
import Todo from 'todo';
import TodoApi from 'todoapi';

export var TodoList = React.createClass({

  render(){
    var {todos,showCompleted,searchText} = this.props;

    var self = this;
    var renderTodos = function() {
      return TodoApi.filterTodos(todos,showCompleted,searchText).map((todo) => {
          return (<Todo key={todo.id} {...todo}/>);
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoList);
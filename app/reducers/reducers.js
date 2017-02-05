/**
 * Created by swapnil on 18/12/16.
 */

import uuid from 'uuid';

export var searchTextReducer = (state = '',action) => {
  switch(action.type){
    case 'SET_SEARCH_TEXT': {
      return action.searchText;
    };
    default: {
      return state;
    }
  }
};

export var showCompletedReducer = (state=false,action) => {
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':{
      return !state;
    };
    default: {
      return state;
    }
  }
};



export var todoReducer = (state=[],action) => {
  switch(action.type){
    case 'ADD_TODO':{
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false
        }
      ]
    };

    case 'ADD_TODOS':{
      return [
        ...state,
        ...action.todos
      ]
    };


    case 'TOGGLE_TODO': {
        return state.map((todo) => {
          if(todo.id === action.id){
            var completed = !todo.completed;
            return {...todo,completed};
          }else{
            return todo;
          }
        });
    };
    default: {
      return state;
    };
  }
};

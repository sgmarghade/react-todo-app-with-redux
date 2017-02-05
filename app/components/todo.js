/**
 * Created by swapnil on 16/12/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var Todo = React.createClass({
  render(){
    var {id,text,completed,dispatch} = this.props;
    return (
      <div onClick={() =>{
        dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

export default connect()(Todo);
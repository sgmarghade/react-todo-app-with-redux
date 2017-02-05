/**
 * Created by swapnil on 16/12/16.
 */

var React = require('react');
import {connect} from 'react-redux';
import * as actions from 'actions';
var AddToDo = React.createClass({

  onAddTodo(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo && todo.length > 0){
      this.refs.todo.value = '';
      this.props.dispatch(actions.addTodo(todo));
    }
  },
  render(){
    return (
        <div>
          <form  onSubmit={this.onAddTodo}>
            <input type="text" ref="todo" placeholder="what you want to add?"></input>
            <button className="button hollow expanded">Add Todo</button>
          </form>
        </div>
    );
  }
});

export default connect(2)(AddToDo);
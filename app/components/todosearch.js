/**
 * Created by swapnil on 16/12/16.
 */

var React  = require('react');
import {connect} from 'react-redux';
import * as actions from 'actions';

var TodoSearch = React.createClass({

  handleSearch(){
    var searchText = this.refs.searchText.value;
    var {dispatch} = this.props;
    dispatch(actions.setSearchText(searchText));
  },

  toggleCompleted(){
    var {dispatch} = this.props;
    dispatch(actions.toggleShowCompleted())
  },
  render() {
    return (
      <div className="label hollow" style={{width:"100%"}}>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.toggleCompleted}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect()(TodoSearch);
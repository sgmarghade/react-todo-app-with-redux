/**
 * Created by swapnil on 16/12/16.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import TodoList from 'todolist';
import Todo from 'todo';


describe("TodoList",() => {
  it("should exists",()=> {
    expect(TodoList).toExist();
  });

  it("should render 1 todoComponent for each todo item",function(){
      var todos = [
        {
          id: 1,
          text:"sometext1"
        },
        {
          id: 2,
          text:"sometext2"
        }
      ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
    expect(todoComponents.length).toBe(todos.length);
  });
});

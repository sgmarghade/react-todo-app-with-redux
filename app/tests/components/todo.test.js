/**
 * Created by swapnil on 16/12/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('todo');

describe("todo",() => {
  it("should exists",()=> {
    expect(Todo).toExist();
  });

});

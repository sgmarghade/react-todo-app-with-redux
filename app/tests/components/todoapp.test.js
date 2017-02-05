/**
 * Created by swapnil on 16/12/16.
 */

/**
 * Created by swapnil on 16/12/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('todoapp');

describe("TodoApp",() => {
  it("should exists",()=> {
    expect(TodoApp).toExist();
  });
});

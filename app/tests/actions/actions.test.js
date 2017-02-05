/**
 * Created by swapnil on 18/12/16.
 */

var expect = require('expect');
import * as actions from 'actions';

describe('Actions',() => {
    it('should generate search text action',() => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Something'
      };

      expect(actions.setSearchText('Something')).toEqual(action);
    });
});
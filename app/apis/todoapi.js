/**
 * Created by swapnil on 16/12/16.
 */

module.exports = {
  setTodos: function(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
    return todos;
  },

  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    if(stringTodos){
      return JSON.parse(stringTodos);
    }else {
      return [];
    }
  },

  filterTodos: function(todos,showCompleted, searchText){
    var filteredTodos = todos;
    filteredTodos = filteredTodos.filter((item)=>{
      return (!item.completed || showCompleted) && (item.text.toLowerCase().indexOf(searchText) > -1);
    });
    return filteredTodos;
  }
}
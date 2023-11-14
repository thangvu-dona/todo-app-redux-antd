import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

// Calculate todoList base on search Filter
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });

//   return todoRemaining;
// }
//reselect: calculate a selector from other selector

export const todoRemainingSelector = createSelector(todoListSelector, statusFilterSelector, searchTextSelector, (todoList, status, searchText) => {
  return todoList.filter((todo) => {
    if (status === 'All') {
      return todo.name.includes(searchText);
    }

    return (
      todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed)
    );
  });
});
// action is an object which dispatched to reducer on store
// export const addTodoAction = {
//   type: 'todoList/addTodo',
//   payload: { id: 5, name: 'Play Football', completed: false, priority: 'Medium' },
// }

// RECOMMENDED: use action creator
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}

export const searchFilter = (text) => {
  return {
    type: 'filters/searchFilter',
    payload: text
  }
}
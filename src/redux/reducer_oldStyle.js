const initState = {
  filters: {
    search: '',
    status: 'all',
    priority: []
  },
  todoList: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
  ]
}

const rootReducer = (state = initState, action) => {
  /* 
    {
      type: 'todoList/addTodo',
      payload: { id: 5, name: 'Play Football', completed: false, priority: 'Medium' },
    }
   */
  switch (action.type) {
    case 'todoList/addTodo': {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    }

    case 'filters/searchFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload
        }
      }
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
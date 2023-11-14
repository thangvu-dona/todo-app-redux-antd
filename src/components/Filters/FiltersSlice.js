const initState = {
  search: '',
  status: 'all',
  priority: []
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'filters/searchFilter': {
      return {
        ...state,
        search: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default filtersReducer;
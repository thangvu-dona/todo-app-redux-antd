import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  status: 'All',
  priorities: []
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload
    }, // => {type: 'filters/searchFilter'}

    statusFilterChange: (state, action) => {
      state.status = action.payload
    },

    priorityFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  }
})

const { actions, reducer } = filtersSlice;
export const { searchFilter, statusFilterChange, priorityFilterChange } = actions;
export default reducer;
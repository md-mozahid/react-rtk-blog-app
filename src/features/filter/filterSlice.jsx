import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all',
  sort: 'default',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtering: (state, action) => {
      state.filter = action.payload
    },
    sorting: (state, action) => {
      state.sort = action.payload
    },
  },
})

export default filterSlice.reducer
export const { filtering, sorting } = filterSlice.actions

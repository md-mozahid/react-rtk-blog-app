import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import blogSaved from './saveAPI'

const initialState = {
  saved: false,
}

export const updateSaved = createAsyncThunk('save/blogSave', async (data) => {
  const toSave = await blogSaved(data)
  return toSave
})

const blogSavedSlice = createSlice({
  name: 'save',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateSaved.fulfilled, (state, action) => {
      state.saved = action.payload
    })
  },
})
export default blogSavedSlice.reducer

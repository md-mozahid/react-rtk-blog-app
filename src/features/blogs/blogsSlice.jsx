import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBlogs } from './blogsAPI'

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: '',
}

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const blogs = await getBlogs()
  return blogs
})

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.blogs = action.payload
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.blogs = []
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default blogsSlice.reducer

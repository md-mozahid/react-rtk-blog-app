import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRelatedBlogs } from './RelatedBlogsAPI'

const initialState = {
  relatedBlog: [],
  isLoading: false,
  isError: false,
  error: '',
}

export const fetchRelatedBlogs = createAsyncThunk(
  'relatedBlogs/fetchRelatedBlogs',
  async ({ tags, id }) => {
    const blogs = await getRelatedBlogs({ tags, id })
    return blogs
  }
)

export const relatedBlogsSlice = createSlice({
  name: 'relatedBlogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.relatedBlog = action.payload
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.relatedBlog = []
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default relatedBlogsSlice.reducer

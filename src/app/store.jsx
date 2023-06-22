import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../features/blog/blogSlice'
import blogsReducer from '../features/blogs/blogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
  },
})

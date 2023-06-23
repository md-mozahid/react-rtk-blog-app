import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../features/blog/blogSlice'
import blogsReducer from '../features/blogs/blogsSlice'
import relatedBlogsSlice from '../features/relatedBlogs/RelatedBlogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsSlice,
  },
})

import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../features/blog/blogSlice'
import blogsReducer from '../features/blogs/blogsSlice'
import likesIncrementSlice from '../features/likes/likesIncrementSlice'
import relatedBlogsSlice from '../features/relatedBlogs/RelatedBlogsSlice'
import blogSavedSlice from '../features/save/saveSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsSlice,
    likes: likesIncrementSlice,
    saved: blogSavedSlice,
  },
})

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../features/blogs/blogsSlice'
import SingleBlog from './SingleBlog'

const BlogsGrid = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  return (
    <main className="post-container" id="lws-postContainer">
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </main>
  )
}

export default BlogsGrid

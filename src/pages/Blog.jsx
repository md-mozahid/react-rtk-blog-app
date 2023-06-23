import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import RelatedBlogsList from '../components/RelatedBlogs/RelatedBlogsList'
import BlogDetails from '../components/blogDetails/BlogDetails'
import GoToHome from '../components/home/GoToHome'
import { fetchBlog } from '../features/blog/blogSlice'
import Loading from '../ui/Loading'

const Blog = () => {
  const dispatch = useDispatch()
  const { blog, isLoading, isError, error } = useSelector((state) => state.blog)

  const { blogId } = useParams()

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  }, [dispatch, blogId])

  let content = null
  if (isLoading) content = <Loading />

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <section className="post-page-container">
        <BlogDetails blog={blog} />
        <RelatedBlogsList blog={blog} />
      </section>
    )
  }

  return (
    <>
      <GoToHome />
      {content}
    </>
  )
}

export default Blog

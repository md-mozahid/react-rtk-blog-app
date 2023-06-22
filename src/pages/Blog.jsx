import { useSelector } from 'react-redux'
import RelatedBlogsList from '../components/RelatedBlogs/RelatedBlogsList'
import BlogDetails from '../components/blogDetails/BlogDetails'
import GoToHome from '../components/home/GoToHome'

const Blog = () => {
  const { blog } = useSelector((state) => state.blog)
  console.log(blog)

  return (
    <>
      <GoToHome />
      <section className="post-page-container">
        <BlogDetails blog={blog} />
        <RelatedBlogsList />
      </section>
    </>
  )
}

export default Blog

import RelatedBlogsList from '../components/RelatedBlogs/RelatedBlogsList'
import BlogDetails from '../components/blogDetails/BlogDetails'
import GoToHome from '../components/home/GoToHome'

const Blog = () => {
  return (
    <>
      <GoToHome />
      <section className="post-page-container">
        <BlogDetails />
        <RelatedBlogsList />
      </section>
    </>
  )
}

export default Blog

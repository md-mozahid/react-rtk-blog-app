import GoToHome from '../components/home/GoToHome'
import PostDetails from '../components/postDetails/postDetails'
import RelatedPostsList from '../components/relatedPost/RelatedPostsList'

const Post = () => {
  return (
    <>
      <GoToHome />
      <section className="post-page-container">
        <PostDetails />
        <RelatedPostsList />
      </section>
    </>
  )
}

export default Post

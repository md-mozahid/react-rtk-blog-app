import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SingleBlog = ({ blog = {} }) => {
  // eslint-disable-next-line react/prop-types
  const { image, createdAt, likes, title } = blog
  return (
    <div className="lws-card">
      <Link to="post-details">
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <a href="post.html" className="lws-postTitle">
          {title}
        </a>
        <div className="lws-tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog

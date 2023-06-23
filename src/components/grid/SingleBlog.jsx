import { Link } from 'react-router-dom'

const SingleBlog = ({ blog = {} }) => {
  const { id, image, createdAt, likes, title, tags } = blog

  return (
    <div className="lws-card">
      <Link to={`blogs/${id}`}>
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
          <Link to={`/blogs/${id}`}>{title}</Link>
        </a>
        <div className="lws-tags">
          {tags.map((tag) => (
            <span key={tag.id}>#{tag} </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog

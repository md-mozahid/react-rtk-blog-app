import { Link } from 'react-router-dom'

const RelatedBlogItem = ({ blog }) => {
  const { id, title, image, createdAt, tags } = blog
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
          <Link to={`/blogs/${id}`}>{title}</Link>
        </a>
        <div className="mb-0 tags">
          {tags.map((tag) => (
            <span key={tag.id}>#{tag} </span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default RelatedBlogItem

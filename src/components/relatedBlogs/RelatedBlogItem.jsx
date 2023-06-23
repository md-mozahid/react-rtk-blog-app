import { Link } from 'react-router-dom'

const RelatedBlogItem = ({ blog }) => {
  const { id, title, image, createdAt, tags } = blog
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default RelatedBlogItem

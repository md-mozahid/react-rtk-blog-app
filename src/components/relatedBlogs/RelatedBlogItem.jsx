const RelatedBlogItem = ({ blog }) => {
  const { image, createdAt } = blog
  return (
    <div className="card">
      <a href="post.html">
        <img src={image} className="card-image" alt="" />
      </a>
      <div className="p-4">
        <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
          Top Github Alternatives
        </a>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default RelatedBlogItem

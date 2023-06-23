import Like from './like'
import Save from './save'

// eslint-disable-next-line react/prop-types
const BlogDetails = ({ blog = {} }) => {
  const { id, likes, isSaved, image, title, tags, description } = blog
  return (
    <section className="post-page-container">
      <main className="post">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tags.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </div>
          <div className="btn-group">
            <Like likes={likes} id={id} />
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            <Save isSaved={isSaved} id={id} />
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default BlogDetails

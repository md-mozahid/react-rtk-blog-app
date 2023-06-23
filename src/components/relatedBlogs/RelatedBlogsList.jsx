import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedBlogs } from '../../features/relatedBlogs/RelatedBlogsSlice'
import Loading from '../../ui/Loading'
import RelatedBlogItem from './RelatedBlogItem'

const RelatedBlogList = ({ blog }) => {
  const { id, tags } = blog

  const dispatch = useDispatch()

  const { relatedBlog, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  )

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: id }))
  }, [dispatch, tags, id])

  // decide what to render
  let content = null

  if (isLoading) content = <Loading />

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>
  }

  if (!isLoading && !isError && relatedBlog?.length === 0) {
    content = <div className="col-span-12">No related blogs found!</div>
  }

  if (!isLoading && !isError && relatedBlog?.length > 0) {
    content = relatedBlog.map((blog) => (
      <RelatedBlogItem key={blog.id} blog={blog} />
    ))
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  )
}

export default RelatedBlogList

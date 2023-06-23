import axiosInstance from '../../utils/axios'

export const getBlogs = async (sort) => {
  let conditions = null

  if (sort === 'newest') {
    conditions = `/blogs?_sort=createdAt&_order=desc`
  } else if (sort === 'most_liked') {
    conditions = `/blogs?_sort=likes&_order=desc`
  } else {
    conditions = '/blogs'
  }

  const response = await axiosInstance.get(conditions)
  return response.data
}

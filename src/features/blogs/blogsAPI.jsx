import axiosInstance from '../../utils/axios'

export const getBlogs = async () => {
  const response = await axiosInstance.get('/blogs')
  return response.data
}

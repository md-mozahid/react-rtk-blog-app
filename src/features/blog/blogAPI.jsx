import axiosInstance from '../../utils/axios'

export const getBlog = async (id) => {
  const response = await axiosInstance.get(`/blogs/${id}`)
  return response.data
}

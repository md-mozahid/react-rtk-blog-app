import axiosInstance from '../../utils/axios'

const incrementLike = async (data) => {
  const response = axiosInstance.get(`/blogs/${data.id}`, { likes: data.likes })
}

export default incrementLike

import axiosInstance from '../../utils/axios'

const blogSaved = async (data) => {
  const response = axiosInstance.patch(`/blogs/${data.id}`, {
    isSaved: data.isSaved,
  })
}

export default blogSaved

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLikes } from '../../features/likes/likesIncrementSlice'

const Like = ({ id, likes }) => {
  const [count, setCount] = useState(likes)
  const dispatch = useDispatch()

  const data = {
    id,
    likes: count,
  }
  const handleLikeIncrement = () => {
    dispatch(updateLikes(data))
    setCount(likes + 1)
  }
  return (
    <button
      className="like-btn"
      id="lws-singleLinks"
      onClick={handleLikeIncrement}>
      <i className="fa-regular fa-thumbs-up"></i> {count}
    </button>
  )
}

export default Like

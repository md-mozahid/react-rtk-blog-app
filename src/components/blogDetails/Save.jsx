import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSaved } from '../../features/save/saveSlice'

// this component not working as pre requirement, 
const Save = ({ id, isSaved }) => {
  const [save, setSave] = useState(isSaved)
  const dispatch = useDispatch()

  const data = {
    id,
    isSaved: save,
  }
  const handleSaved = () => {
    dispatch(updateSaved(data))
    setSave(!save)
  }
  return (
    <button
      className={`${isSaved && 'active'} save-btn`}
      id="lws-singleSavedBtn"
      onClick={handleSaved}>
      <i className="fa-regular fa-bookmark"></i> Saved
    </button>
  )
}

export default Save

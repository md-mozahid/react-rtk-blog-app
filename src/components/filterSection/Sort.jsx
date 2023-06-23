import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sorting } from '../../features/filter/filterSlice'

const Sort = () => {
  const [checked, setChecked] = useState('')
  const dispatch = useDispatch()

  const handleSorting = () => {
    dispatch(sorting(checked))
  }
  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        value={checked}
        onChange={(e) => setChecked(e.target.value)}
        onClick={handleSorting}>

        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  )
}

export default Sort

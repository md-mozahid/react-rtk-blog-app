import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtering } from '../../features/filter/filterSlice'

const Filter = () => {
  const [select, setSelect] = useState('all')
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.filters)

  const handleFilter = (value) => {
    dispatch(filtering(value))
  }

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            className="radio"
            checked={filter === 'all'}
            value={filter}
            onChange={(e) => setSelect(e.target.value)}
            onClick={() => handleFilter('all')}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            checked={filter === 'saved'}
            value={filter}
            onChange={(e) => setSelect(e.target.value)}
            onClick={() => handleFilter('saved')}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  )
}

export default Filter

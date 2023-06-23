import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import incrementLike from './likesIncrementAPI'

const initialState = {
  updatedLikes: 0,
}

// create async thunk
export const updateLikes = createAsyncThunk(
  'likes/updateLikes',
  async (data) => {
    const like = await incrementLike(data)
    return like
  }
)

// create slice
export const likesIncrementSlice = createSlice({
  name: 'likesCount',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateLikes.fulfilled, (state, action) => {
      state.updatedLikes += 1
    })
  },
})

export default likesIncrementSlice.reducer


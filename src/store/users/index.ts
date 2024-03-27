import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = []

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<string>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    },
  },
})

export default userSlice.reducer
export const { deleteUserById } = userSlice.actions

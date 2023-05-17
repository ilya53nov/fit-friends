import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/api'
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { authApi } from './auth-api'

const slice = createSlice({
  name: 'auth',
  initialState: { role: '', isAuthenticated: false },
  reducers: {
    logout: (state) => {
      state.role = ''
      state.isAuthenticated = false
    },
  },
  extraReducers: (builder) => {
    console.log(builder);
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, { payload: { role } }) => {
        state.role = role
        state.isAuthenticated = true
      },
      
    )
    
  },
})

export const { logout } = slice.actions

export default slice.reducer

export const selectRole = (state: { auth: { role: any } }) => state.auth.role
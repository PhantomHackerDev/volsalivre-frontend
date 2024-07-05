import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { AUTH } from '../../App.config'

// Import Reducers
import { setIsAuthenticated, setIsAuthenticating, setToken, setUser, setMessage } from './authReducer'

// Login Action
export const login = createAsyncThunk('auth/login', async (user: any, { dispatch }) => {

	// Set Is Authenticating `true`
	dispatch( setIsAuthenticating(true) )
  
	try {
	  const res = await axios.post('/api/users/login', user)
	//   const res = await axios.post(AUTH.LOGIN, user)
  
	  // If Error or Token Doesn't Exist
	  if(!res?.data?.data) {
		throw new Error('Token Not Found')
	  }
	  
	  const token = res.data.data
  
	  // Validate User By Token
	  dispatch( validateUser(token) )
  
	} catch(err) {
	  // Dispatch `authReducer` Values to Redux Store
	  dispatch( setIsAuthenticated(false) )
	  dispatch( setToken(null) )
	  dispatch( setUser({}) )
	//   dispatch( setMessage({type: "error", message: err?.response?.data?.message}) )
  
	  // Set Is Authenticating `false`
	  dispatch( setIsAuthenticating(false) )
	}
})

// Validate User By Token
export const validateUser = createAsyncThunk('auth/validateUser', async (token: any, { dispatch }) => {

	// Set Is Authenticating `true`
	dispatch( setIsAuthenticating(true) )
  
	try {
		
	  // If Token Doesn't Exist
	  if(!token) {
		throw new Error('User Not Found')
	  }
  
	  const res = await axios.get('/api/users/getUser', { headers: { Authorization: `Bearer ${ token }` } })
	//   const res = await axios.get(AUTH.GET_USER, { headers: { Authorization: `Bearer ${ token }` } })

	  // If Error or User Doesn't Exist
	  if(!res?.data?.user) {
		throw new Error('User Not Found')
	  }
  
	  const user = res.data.user
  
	  // Save `token` & `user` to localStorage
	  localStorage.setItem('token', token)
	  localStorage.setItem('user', JSON.stringify(user))
  
	  // Dispatch `authReducer` Values to Redux Store
	  dispatch( setIsAuthenticated(true) )
	  dispatch( setToken(token) )
	  dispatch( setUser(user) )
  
	  // Set Is Authenticating `false`
	  dispatch( setIsAuthenticating(false) )
  
	} catch(err) {
	  console.error(err)
  
	  // Dispatch `authReducer` Values to Redux Store
	  dispatch( setIsAuthenticated(false) )
	  dispatch( setToken(null) )
	  dispatch( setUser({}) )
  
	  // Set Is Authenticating `false`
	  dispatch( setIsAuthenticating(false) )
	}
})

// Logout Action
export const logout = createAsyncThunk('auth/logout', async (e, { dispatch }) => {

	// Set Is Authenticating `true`
	dispatch( setIsAuthenticating(true) )

	// Clear localStorage
	localStorage.clear()

	// Dispatch `authReducer` Values to Redux Store
	dispatch( setIsAuthenticated(false) )
	dispatch( setToken(null) )
	dispatch( setUser({}) )

	// Set Is Authenticating `false`
	dispatch( setIsAuthenticating(false) )
})
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import usersReducer from '../slice/UserSlice'
import postReducer from "../slice/PostSlice"


const reducer = combineReducers({
  user:usersReducer,
  posting:postReducer, 
})

const store = configureStore({
  reducer,    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;
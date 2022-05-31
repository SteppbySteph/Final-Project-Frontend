import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Posts from 'components/Posts'
import Login from 'components/Login'
import user from 'reducer/user'
import posts from 'reducer/posts'

const reducer = combineReducers({
  user: user.reducer,
  posts: posts.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store ={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
         </Routes>
      </BrowserRouter>
    </Provider> 
  )
}

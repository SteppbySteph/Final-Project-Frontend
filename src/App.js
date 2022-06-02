import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Posts from 'pages/Posts'
import Login from 'pages/Login'
import Home from 'pages/Home'
import LandingPage from 'pages/LandingPage'
import Contact from 'pages/Contact'
import user from 'reducer/user'
import posts from 'reducer/posts'

const reducer = combineReducers({
  user: user.reducer,
  posts: posts.reducer
})

// const store = configureStore({reducer})

const persistedStateJSON = localStorage.getItem("state")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = configureStore({ reducer, preloadedState: persistedState })

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()))
})


export const App = () => {
  return (
    <Provider store ={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
         </Routes>
      </BrowserRouter>
    </Provider> 
  )
}

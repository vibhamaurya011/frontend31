import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from "./Register"
import Login from "./Login"
import AddPost from './AddPost'
function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addpost' element={<AddPost/>}/>
    </Routes>
  )
}

export default MainRoute

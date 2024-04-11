import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Detail from '../Pages/Detail'

function PublicRoutes() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
          <Route path='/detail' element={<Detail/>}/>


    </Routes>
  )
}

export default PublicRoutes
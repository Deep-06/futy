import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { SingleGame } from './SingleGame'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game/:id' element={<SingleGame/>}/>
      </Routes>
    </div>
  )
}

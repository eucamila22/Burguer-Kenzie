import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home'
import LoginPage from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import RegisterPage from '../Pages/Register'
import { AuthRoute } from './authRoute'

const RoutesMain = () => {
   return (
      <Routes>
         <Route path='/' element={<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route element={<AuthRoute />}>
            <Route path='/home' element={<HomePage />} />
         </Route>
         <Route path='*' element={<NotFound />} />
      </Routes>
   )
}

export default RoutesMain

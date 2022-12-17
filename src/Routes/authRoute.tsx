import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

export const AuthRoute = () => {
   const token = localStorage.getItem('@TOKEN')
   if (!token) return <Navigate to='/' replace />
   return <Outlet />
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLogin, Dashboard, ErrorPage } from '../pages'

const WebRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route index element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes
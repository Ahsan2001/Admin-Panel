import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Address, AdminLogin, Dashboard, ErrorPage, Order } from '../pages'

const WebRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route index element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes
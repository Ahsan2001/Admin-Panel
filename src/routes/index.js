import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, ErrorPage } from '../pages'

const WebRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes
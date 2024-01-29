import React from 'react';
import { Routes, Route } from "react-router-dom"
import Entry from './Entry/Entry'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Entry />} />
    </Routes>
  )
}
export default AppRoutes;
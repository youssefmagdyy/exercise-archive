import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import Homepage from './components/Homepage';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
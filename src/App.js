import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import Homepage from './components/Homepage';
import './App.css'
import Navbar from './components/Navbar';
import All from './components/All';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/all" element={<All />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import Homepage from './components/Homepage';
import './App.scss'
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import Login from './components/Login';
import Register from './components/Register';
import Saved from './components/Saved';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/exercises/:pagenumber" element={<Exercises />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/saved/:pagenumber" element={<Saved/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
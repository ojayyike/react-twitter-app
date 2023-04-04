import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import '../styles/styles.css'
import Login from './Login'
import  Register from './Register'
function App() {

  return (
    <BrowserRouter> 
    <div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

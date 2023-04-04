import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import '../styles/styles.css'
import Login from './Login'
import greeting from "./Home"
function App() {

  return (
    <BrowserRouter> 
    <div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/test" Component={greeting} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

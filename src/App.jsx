// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App

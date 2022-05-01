import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Dashboard, Login, Navbar } from './components'

const App = () => {

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
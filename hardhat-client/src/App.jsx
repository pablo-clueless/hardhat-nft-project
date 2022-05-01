import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
// import { useMoralis } from 'react-moralis'

import { Dashboard, Login, Navbar } from './components'
import { theme } from './theme'

const App = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar isWalletConnected />
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
      </ThemeProvider>
    </Router>
  )
}

export default App
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Dashboard, Footer, Minted, Navbar } from './components'
import { theme } from './theme'
import { useEffect } from 'react'

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [minteraddress, setMinterAddress] = useState('')

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = accounts[0]
        setIsWalletConnected(true)
        setMinterAddress(account)
      } else {
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  },[])

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar isWalletConnected={isWalletConnected} />
      <main>
        <Routes>
          <Route path='/' element={<Dashboard isWalletConnected={isWalletConnected} minterAddress={minteraddress} />} />
          <Route path='/minted-nft' element={<Minted />} />
        </Routes>
      </main>
      <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
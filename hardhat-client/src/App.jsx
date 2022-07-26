import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, NFT, Showcase } from './pages'
import { Navbar, ThemeSettings } from './components'

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
    <div className='bg-slate-900'>
      <Router>
        <Navbar isWalletConnected={isWalletConnected} />
        <Routes>
          <Route path='/' element={<Home isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} />} />
          <Route path='/nfts' element={<Showcase isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} />} />
          <Route path='/nfts/:id' element={<NFT isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
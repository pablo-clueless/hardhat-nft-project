import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, NFT, Showcase } from './pages'
import { ColorPicker, Navbar, ThemeSettings } from './components'
import { useProviderContext } from './contexts/ContextProvider'

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [minteraddress, setMinterAddress] = useState('')
  const [openSeaProfile, setOpenSeaProfile] = useState('')
  const { currentColor, isClicked, setColor } = useProviderContext()

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = accounts[0]
        setIsWalletConnected(true)
        setMinterAddress(account)

        setOpenSeaProfile(`https://testnets.opensea.io/${account}?tab=activity`)
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
    <div className=''>
      <Router>
        <Navbar isWalletConnected={isWalletConnected} />
        <ThemeSettings />

        <div>
          <Routes>
            <Route path='/' element={<Home isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} openSeaProfile={openSeaProfile} />} />
            <Route path='/nfts' element={<Showcase isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} />} />
            <Route path='/nfts/:id' element={<NFT isWalletConnected={isWalletConnected} minterAddress={minteraddress} connectWallet={checkIfWalletIsConnected} />} />
          </Routes>
        </div>

        {isClicked.themeSettings && <ColorPicker />}
      </Router>
    </div>
    
  )
}

export default App
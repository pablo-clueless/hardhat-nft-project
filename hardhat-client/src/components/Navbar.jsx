import React from 'react'

import { useProviderContext } from '../contexts/ContextProvider'

const Navbar = ({isWalletConnected, connectWallet, logout}) => {
  const { currentColor } = useProviderContext()

  return (
    <nav className='w-full flex items-center justify-between p-4'>
        <p className='md:text-2xl text-lg' style={{color: currentColor}}>NFT Miinter</p>
        
        {isWalletConnected ? 
        <button className='text-base text-green-400' onClick={logout}>
          Wallet Connected 🔐
        </button> : 
        <button className='text-base text-red-400' onClick={connectWallet}>
          Connect Wallet 🔓
        </button>}
    </nav>

  )
}

export default Navbar
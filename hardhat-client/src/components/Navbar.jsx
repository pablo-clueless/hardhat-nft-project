import React from 'react'

import { useProviderContext } from '../contexts/ContextProvider'

const Navbar = ({isWalletConnected, logout}) => {
  const { currentColor } = useProviderContext()

  return (
    <nav className='w-full flex items-center justify-between p-4'>
        <p className='md:text-2xl text-lg' style={{color: currentColor}}>NFT Miinter</p>
        
        {isWalletConnected ? 
        <p className='text-base text-green-400'>Wallet Connected 🔐</p> : 
        <p className='text-base text-red-400'>Connect Wallet 🔓</p>}
    </nav>

  )
}

export default Navbar
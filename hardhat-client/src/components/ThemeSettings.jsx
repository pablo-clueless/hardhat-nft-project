import React from 'react'
import { FiSettings } from 'react-icons/fi'

import { useProviderContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {
  const { currentColor, handleClick } = useProviderContext()

  return (
    <div className='fixed bottom-16 right-2 z-50 cursor-pointer' onClick={() => handleClick('themeSettings')}>
      <div className='rounded-full p-2 bg-white' style={{color: currentColor}}>
        <FiSettings />
      </div>
    </div>
  )
}

export default ThemeSettings
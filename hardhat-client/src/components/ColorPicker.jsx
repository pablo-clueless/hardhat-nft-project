import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi'

import { THEMES } from '../assets'
import { useProviderContext } from '../contexts/ContextProvider'

const ColorPicker = () => {
    const { currentColor, setColor, handleUnclick } = useProviderContext()

  return (
    <div className='w-250 fixed bottom-16 right-2 flex flex-col items-center justify-center bg-slate-900 text-sm border-1 border-white p-2 z-50'>
        <div className='w-full flex items-center justify-between border-b-1 border-white'>
            <p className='text-white'>Color Picker</p>
            <button type='button' className='rounded-full p-1 text-white' onClick={() => handleUnclick('themeSettings')}>
                <FiX />
            </button>
        </div>
        <div className='w-full flex items-center justify-between mt-2'>
            {THEMES.map((theme, index) => (
                <div key={index} className='rounded-full p-3 cursor-pointer' style={{backgroundColor: theme.color }} onClick={() => setColor(theme.color)}>
                    {currentColor === theme.color && <FiCheck className='text-white text-xs' />}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ColorPicker
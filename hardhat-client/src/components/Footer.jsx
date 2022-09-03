import React from 'react'

import { useProviderContext } from '../contexts/ContextProvider'

const Footer = () => {
  const { currentColor } = useProviderContext()

  return (
    <div className='w-full flex items-center justify-center bg-white text-slate-900 px-2 py-4'>
      <p>Made with ❤️ by <a href='https://github.com/pablo-clueless' target='_blank' rel='noreferrer' style={{color: currentColor}}> @pablo-clueless</a>.</p>
    </div>
  )
}

export default Footer
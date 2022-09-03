import React from 'react'
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiX, FiXOctagon } from 'react-icons/fi'

const Alert = ({type,message,onClose}) => {
    if(type === 'error') {
        return (
            <div className='flex items-center gap-2 bg-red-200 border-1 border-red-600 text-red-600 text-xl fixed top-6 left-1/2 -translate-x-1/2 p-1 z-50 text-center'>
                <FiXOctagon />
                {message}
                <button type='button' onClick={onClose} className='rounded-full p-2 hover:drop-shadow-xl hover:bg-red-300'>
                    <FiX />
                </button>
            </div>
        )
    }

    if(type === 'success') {
        return (
            <div className='flex items-center gap-2 bg-green-200 border-1 border-green-600 text-green-600 text-xl fixed top-6 left-1/2 -translate-x-1/2 p-1 z-50 text-center'>
                <FiCheckCircle />
                {message}
                <button type='button' onClick={onClose} className='rounded-full p-2 hover:drop-shadow-xl hover:bg-green-300'>
                    <FiX />
                </button>
            </div>
        )
    }

    if(type === 'warning') {
        return (
            <div className='flex items-center gap-2 bg-yellow-200 border-1 border-yellow-600 text-yellow-600 text-xl fixed top-6 left-1/2 -translate-x-1/2 p-1 z-50 text-center'>
                <FiAlertTriangle />
                {message}
                <button type='button' onClick={onClose} className='rounded-full p-2 hover:drop-shadow-xl hover:bg-yellow-300'>
                    <FiX />
                </button>
            </div>
        )
    }

  return (
    <div className='flex items-center gap-2 bg-blue-200 border-1 border-blue-600 text-blue-600 text-xl fixed top-6 left-1/2 -translate-x-1/2 p-1 z-50 text-center'>
        {message}
        <button type='button' onClick={onClose} className='rounded-full p-2 hover:drop-shadow-xl hover:bg-blue-300'>
            <FiX />
        </button>
    </div>
  )
}

export default Alert
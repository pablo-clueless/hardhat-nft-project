import React from 'react'

const Modal = ({message,onClear,onConfirm}) => {

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-transparent grid place-items-center z-50'>
      <div className='w-2/3 md:w-1/2 lg:w-500 h-400 bg-slate-900 border-1 border-white p-4 drop-shadow-xl'>
        <div className='h-300'>
          <p className='text-white font-medium'>
            {message}
          </p>
        </div>
        <div className='flex items-center justify-between p-2'>
          <button type='button' className='w-16 px-2 py-1 my-2 bg-white text-green-900 font-semibold border-1 border-white relative before:absolute before:-top-2 before:-left-2 before:border-1 before:border-white before:w-full before:h-full hover:before:-top-1 hover:before:-left-1 before:duration-300 before:ease-in-out' onClick={onConfirm}>
            Ok
          </button>
          <button type='button' className='w-16 px-2 py-1 my-2 bg-white text-red-900 font-semibold border-1 border-white relative before:absolute before:-top-2 before:-left-2 before:border-1 before:border-white before:w-full before:h-full hover:before:-top-1 hover:before:-left-1 before:duration-300 before:ease-in-out' onClick={onClear}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
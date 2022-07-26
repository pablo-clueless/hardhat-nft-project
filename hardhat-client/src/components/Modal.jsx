import React from 'react'

const Modal = ({title,address,hash,onClose}) => {

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-transparent grid place-items-center z-50'>
      <div className='w-2/3 md:w-1/2 lg:w-500 h-400 bg-slate-900 text-center border-1 border-white p-4 drop-shadow-xl'>
        <div className='my-4'>
          <p className='text-white text-2xl font-bold'>{title}</p>
        </div>
        <div className='h-200'>
          <p className='text-white font-medium'>
            Your NFT has been minted! You view it at the following address:
            {address} <br />
            Transaction hash: {hash}
          </p>
        </div>
        <div className='flex items-center justify-center p-2'>
          <button type='button' className='w-16 px-2 py-1 my-2 bg-white text-slate-900 font-semibold border-1 border-white relative before:absolute before:-top-2 before:-left-2 before:border-1 before:border-white before:w-full before:h-full hover:before:-top-1 hover:before:-left-1 before:duration-300 before:ease-in-out' onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
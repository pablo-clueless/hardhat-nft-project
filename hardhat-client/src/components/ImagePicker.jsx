import React from 'react'
import { FiTrash } from 'react-icons/fi'

const ImagePicker = ({isValid,name,onChange,onClick,src}) => {

  return (
    <div className='flex flex-col items-center justify-center md:w-2/3 w-300 h-300 border-1 border-white relative'>
        {!isValid ?
        <label className='text-slate-400 w-full h-full text-center grid place-items-center cursor-pointer px-2'>
            <p>Upload file</p>
            <i>.png, .jpg, .jpeg, .svg, .webp & .gif only.</i>
            <input  type="file" name={name} onChange={onChange} className='hidden' />
        </label>
        :
        <>
        <img src={src} alt={name} className='w-full h-full object-cover' />
        <button type='button' onClick={onClick} className='rounded-full p-2 bg-slate-200 text-black hover:drop-shadow-xl absolute left-1 top-1'>
          <FiTrash />
        </button>
        </>}
    </div>
  )
}

export default ImagePicker
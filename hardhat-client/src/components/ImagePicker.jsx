import React from 'react'
import { FiTrash } from 'react-icons/fi'

const ImagePicker = ({name,onChange,onClick,src}) => {
  return (
    <div className={style.wrapper}>
        {src === null ?
        <label className={style.label}>
            <p>Upload file</p>
            <i>.png, .jpg, .jpeg, .svg & .gif only.</i>
            <input  type="file" name={name} onChange={onChange} className='hidden' />
        </label>
        :
        <>
        <img src={src} alt={name} className={style.image} />
        <button type='button' onClick={onClick} className={style.button}>
          <FiTrash />
        </button>
        </>}
    </div>
  )
}

const style = {
  wrapper: `flex flex-col items-center justify-center md:w-500 w-200 md:h-500 h-200 border-1 border-slate-500 relative`,
  label: `text-slate-600 w-full h-full text-center grid place-items-center cursor-pointer px-2`,
  image: `w-full h-full object-cover`,
  button: `rounded-full p-2 bg-black text-white text-md md:text-2xl hover:drop-shadow-xl absolute left-1 top-1`
}

export default ImagePicker
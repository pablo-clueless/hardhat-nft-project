import React from 'react'

const Button = ({type,text,onClick}) => {
  return (
    <button type={type} onClick={onClick} className='w-150 px-2 py-1 my-2 bg-white text-slate-900 border-1 border-white relative before:absolute before:-top-2 before:-left-2 before:border-1 before:border-white before:w-full before:h-full hover:before:-top-1 hover:before:-left-1 before:duration-300 before:ease-in-out'>
      {text}
    </button>
  )
}

export default Button
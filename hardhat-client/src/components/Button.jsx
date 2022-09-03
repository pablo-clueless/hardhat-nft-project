import React from 'react'

const Button = ({type,text,onClick}) => {
  return (
    <button type={type} onClick={onClick} className={button}>
      {text}
    </button>
  )
}

const button = `w-100 md:w-150 px-2 py-1 my-2 bg-slate-900 text-white text-xl border-1 border-white relative before:absolute before:-top-2 before:-left-2 before:border-1 before:border-slate-900 before:w-full before:h-full hover:before:top-0 hover:before:left-0 before:duration-200 before:ease-in-out`
export default Button
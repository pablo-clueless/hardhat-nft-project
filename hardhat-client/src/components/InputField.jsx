import React from 'react'

const InputField = ({type,label,name,value,onChange,placeholder}) => {

  if(type === 'textarea') {
    return (
      <div className='flex flex-col w-full'>
        <label htmlFor={name} className='after:content-["*"] after:text-red-600 text-white'>{label}</label>
        <div className='border-1 border-white focus-within:border-slate-400 p-2'>
          <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className='w-full h-100 outline-none bg-transparent text-white leading-4 textarea'></textarea>
      </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={name} className='after:content-["*"] after:text-red-600 text-white mb-2'>{label}</label>
      <div className='border-1 border-white focus-within:border-slate-400 p-2'>
          <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className='w-full h-full outline-none bg-transparent text-white' />
      </div>
    </div>
  )
}

export default InputField
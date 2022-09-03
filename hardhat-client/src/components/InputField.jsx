import React from 'react'

const InputField = ({type,label,name,value,onChange,placeholder}) => {

  if(type === 'textarea') {
    return (
      <div className={style.wrapper}>
        <label htmlFor={name} className={style.label}>{label}</label>
        <div className={style.inputWrapper}>
          <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className={style.textarea}></textarea>
      </div>
      </div>
    )
  }

  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>{label}</label>
      <div className={style.inputWrapper}>
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={style.input} />
      </div>
    </div>
  )
}

const style = {
  wrapper: `flex flex-col w-full`,
  label: `after:content-["*"] after:text-red-600 text-slate-600 mb-2`,
  inputWrapper: `border-1 border-slate-500 focus-within:border-slate-900 p-2`,
  input: `w-full h-full outline-none bg-transparent text-black text-xl`,
  textarea: `w-full h-100 outline-none bg-transparent text-black text-xl leading-4 textarea`
}

export default InputField
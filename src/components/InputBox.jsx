import React from 'react'

const InputBox = React.forwardRef(({ type, className, value, placeholder,onChange ,style}, ref) => {
  return (
    <>
        <input ref={ref} type={type} className={className} value={value} placeholder={placeholder} onChange={onChange} style={style}/>
    </>
  )
})

export default InputBox


// 

import React from 'react'

export default function EditInput({ handleChange, value, name, variant }) {
  if (value == '') {
    return false
  } {
    
    return <input type="text" name={name} value={value} className={`${variant}  outline-none w-full  `} onChange={handleChange} />;
  }
}

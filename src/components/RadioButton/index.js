import React from 'react'
import './index.css'

const RadioButton = props => {
  const { value, labelClass, labelText, inputName } = props

  return (
    <label key={value} className={`custom-rd-label radius ${labelClass}`} htmlFor={inputName}>
      <input
        type="radio"
        name={ inputName }
        value={ value }
        className="custom-rd"
      />
      { labelText }  
    </label>
  )
}

export default RadioButton

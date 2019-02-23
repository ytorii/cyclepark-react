import React from 'react'
import RadioButton from '../RadioButton'

import './index.css'

const inputName = "vehicle-type-input"

const vehicleTypes = [
  {
    labelClass: "blue-rd",
    labelText: "１号地",
    value: 0,
    inputName: inputName,
  },
  {
    labelClass: "orange-rd",
    labelText: "バイク",
    value: 1,
    inputName: inputName,
  },
  {
    labelClass: "green-rd",
    labelText: "２号地",
    value: 2,
    inputName: inputName,
  }
]

const VehicleTypeRadio = props => (
  <div className="vehicle-type-radios">
    { vehicleTypes.map(vehicleType => <RadioButton {...vehicleType}  key={vehicleType.value}/>) }
  </div>
)

export default VehicleTypeRadio

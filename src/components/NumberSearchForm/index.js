import React from 'react'
import VehicleTypeRadio from '../VehicleTypeRadio'
import './index.css'

const NumberSearchForm = props => (
  <section className="number-search">
    <div className="number-label form-label">
      <h2>契約番号から探す</h2>
    </div>
    <form className="number-form">
      <div>
        <VehicleTypeRadio/>
      </div>
    </form>
  </section>
)

export default NumberSearchForm

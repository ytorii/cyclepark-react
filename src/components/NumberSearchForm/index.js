import React, { useEffect } from 'react'
import VehicleTypeRadio from '../VehicleTypeRadio'
import Base from '../../apis/Base'
import './index.css'

const NumberSearchForm = props => {
  useEffect(() => {
    (async () => {
    const baseApi = new Base()
    const result = await baseApi.all()
    console.log(result.body)
    })()
  })

  return (
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
}

export default NumberSearchForm

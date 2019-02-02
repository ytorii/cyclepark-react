import React from 'react'
import { NavLink } from 'react-navi'

import Layout from '../Layout'
import NumberSearchForm from '../NumberSearchForm'
import './index.css'

const layoutProps = { 
  title: "メインメニュー",
}

const MenuPage = props  => (
  <Layout {...layoutProps}>
    <NumberSearchForm />
  </Layout>
)

export default MenuPage

import React from 'react'

import Layout from '../../components/Layout'
import NumberSearchForm from '../../components/NumberSearchForm'
import './index.css'

const layoutProps = { 
  title: "メインメニュー",
}

const MenuPage = ()  => (
  <Layout {...layoutProps}>
    <NumberSearchForm />
  </Layout>
)

export default MenuPage

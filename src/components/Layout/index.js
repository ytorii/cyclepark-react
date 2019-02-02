import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Footer from '../Footer'
import './index.css'

const Layout = props => {

  const { title } = props

  return (
    <div>
      <Header {...{title}} />
      <div className="contents clearfix">
        <SideBar />
        <main className="main">
          { props.children }
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

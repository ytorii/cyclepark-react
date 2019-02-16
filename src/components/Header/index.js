import React from 'react'
import UserInfo from '../UserInfo'
import LogoutButton from '../LogoutButton'
import './index.css'

const Header = ({title}) => (
  <div className="header">
    <div className="inner">
      <h1 className="header-title">{ title }</h1>
      <div className="header-avatar">
        <LogoutButton />
        <UserInfo />
      </div>
    </div>
  </div>
)

export default Header

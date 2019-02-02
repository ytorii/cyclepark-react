import React from 'react'
import LoginButton from '../LoginButton'
import './index.css'

const onSubmit = () => alert('Clicked!')

const LoginPage = () => (
  <div className="login-body clearfix">
    <div className="login-form">
      <div className="login-outer">
        <div className="login-inner">
          <LoginButton onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage

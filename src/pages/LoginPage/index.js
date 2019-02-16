import React from 'react'
import LoginButton from '../../components/LoginButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.css'

const onSubmit = () => alert('Clicked!')

const LoginPage = () => (
  <div>
    <Header title="ログイン" />
    <div className="login-body clearfix">
      <div className="login-form">
        <div className="login-outer">
          <div className="login-inner">
            <LoginButton onSubmit={onSubmit}/>
            <div style={{color: "#000"}}>
              <span> 登録していない方はこちら</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)

export default LoginPage
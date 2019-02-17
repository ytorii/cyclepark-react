import React from 'react'
import FirebaseLoginButton from '../../components/FirebaseLoginButton'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LoadingPage from '../LoadingPage'
import './index.css'

const LoginPage = () => (
  <div>
    <Header title="ログイン" />
    <div className="login-body clearfix">
      <div className="login-form">
        <div className="login-outer">
          <div className="login-inner">
            <FirebaseLoginButton/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)

const withLoading = ({userLoaded}) => (
  userLoaded ? <LoginPage/> : <LoadingPage/>
)

export default withLoading


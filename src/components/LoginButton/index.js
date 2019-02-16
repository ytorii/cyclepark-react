import React from 'react'
import './index.css'
import firebase from '../../utils/firebase'

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

const LoginButton = props => (
  <button type="submit" className="login submit" onClick={googleLogin}>Googleアカウントでログイン</button>
)

export default LoginButton

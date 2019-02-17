import React, { useEffect } from 'react'
import renderFirebaseUi from '../../utils/renderFirebaseUi'

const FirebaseLoginButton = props => {
  useEffect(() => {
    renderFirebaseUi('#firebaseui-auth-container')
  });

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
}

export default FirebaseLoginButton

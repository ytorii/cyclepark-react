import React from 'react'
import firebase from '../../utils/firebase'

const googleLogout = () => {
  firebase.auth().signOut()
    .then( () => console.log("Logout"))
    .catch(err => console.log(err))
}

const LogoutButton = props => (
  <button onClick={googleLogout}>ログアウト</button>
)

export default LogoutButton

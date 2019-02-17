import firebase from './firebase'
import firebaseui from 'firebaseui'

const ui = new firebaseui.auth.AuthUI(firebase.auth())

const uiConfig = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
}

const renderFirebaseUi = containerId => {
  ui.start(containerId, uiConfig);
}

export default renderFirebaseUi

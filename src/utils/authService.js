import firebase from './firebase'

export default {
  getCurrentUser: () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return user
      } else {
        return false
      }
    })
  }
}

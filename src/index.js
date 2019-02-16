import React from 'react'
import ReactDOM from 'react-dom'
import { NavProvider } from 'react-navi'
import { createBrowserNavigation } from 'navi'

import pages from './pages'
import firebase from './utils/firebase'
import App from './App'

import * as serviceWorker from './serviceWorker';

async function main() {
  let navigation = createBrowserNavigation({
    pages,
    context: { currentUser: firebase.auth().currentUser },
  })

  // Subscribe to new authentication state, and use it to set the
  // navigation context and thus recompute the routing state.
  firebase.auth().onAuthStateChanged(user => {
    navigation.setContext({ currentUser: user })
  })

  // Wait until async content is ready, or has failed.
  await navigation.steady()

  ReactDOM.render(
    <NavProvider navigation={navigation}>
      <App />
    </NavProvider>,
    document.getElementById('root')
  );
}

// Start the app
main()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserNavigation } from 'navi'
import pages from './pages'
import authService from './utils/authService'
import App from './App'
import * as serviceWorker from './serviceWorker';

let navigation = createBrowserNavigation({
  pages,
  context: {
    currentUser: authService.getCurrentUser()
  },
})

async function main() {
  // Wait until async content is ready, or has failed.
  await navigation.steady()

  ReactDOM.render(
    <App navigation={navigation} />,
    document.getElementById('root')
  );
}

// Start the app
main()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

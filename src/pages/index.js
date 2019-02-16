import React from 'react'
import { createPage, createSwitch, createRedirect } from 'navi'
import MenuPage from './MenuPage'
import LoginPage from './LoginPage'
import UserContext from '../components/UserContext'

export default createSwitch({
  paths: {
    '/': createRedirect('/signin'),
    '/signin': async env =>
      await env.context.currentUser ? (
        createRedirect(
          env.params.redirectTo
            ? decodeURIComponent(env.params.redirectTo) : '/menu'
        )
      ) : createPage({
        getContent: () => <LoginPage />
      }),
    '/menu': env => {
      const user = env.context.currentUser
      if (!user) {
        return createRedirect('/signin')
      }

      const UserProvider = UserContext.Provider

      // CurrentUserは別に作って、Providerをここで作ってUser を注入するイメージかな？
      return createPage({
        getContent: () => (
          <UserProvider value={ user }>
            <MenuPage />
          </UserProvider>
        )
      })
    },
  }
})

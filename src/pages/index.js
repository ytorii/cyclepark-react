import React from 'react'
import { createPage, createSwitch, createRedirect } from 'navi'
import MenuPage from './MenuPage'
import LoginPage from './LoginPage'
import UserContext from '../utils/UserContext'

export default createSwitch({
  paths: {
    '/': createRedirect('/menu'),

    '/signin': env => {
      const { redirectTo } = env.params

      return env.context.currentUser ? (
        createRedirect( redirectTo ? decodeURIComponent(env.params.redirectTo) : '/menu')
      ) : createPage({
        getContent: () => <LoginPage userLoaded={env.context.userLoaded}/>
      })
    },

    '/menu': env => {
      const user = env.context.currentUser

      if (!user) {
        const { mountpath, search } = env
        return createRedirect(
          `/signin?redirectTo=${encodeURIComponent(mountpath + search)}`
        )
      }

      const UserProvider = UserContext.Provider

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

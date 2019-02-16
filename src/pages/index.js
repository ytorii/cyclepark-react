import React from 'react'
import { createPage, createSwitch, createRedirect } from 'navi'
import MenuPage from '../components/MenuPage'
import LoginPage from '../components/LoginPage'

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
      if (!env.context.currentUser) {
        return createRedirect('/signin')
      }

      return createPage({
        getContent: () => <MenuPage />
      })
    },
  }
})

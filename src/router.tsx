import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'

import { routeTree } from './routeTree.gen'

import './styles.css'

export const createRouter = () => {
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      context: {
        ...TanstackQuery.getContext(),
      },
      scrollRestoration: true,
      defaultPreloadStaleTime: 1000 * 60 * 10,
      defaultPreload: 'intent',
      defaultPreloadDelay: 100,
    }),
    TanstackQuery.getContext().queryClient,
  )

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

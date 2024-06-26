/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AuctionsIdImport } from './routes/auctions/$id'

// Create Virtual Routes

const AuctionsIndexLazyImport = createFileRoute('/auctions/')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuctionsIndexLazyRoute = AuctionsIndexLazyImport.update({
  path: '/auctions/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/auctions/index.lazy').then((d) => d.Route),
)

const AuctionsIdRoute = AuctionsIdImport.update({
  path: '/auctions/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auctions/$id': {
      id: '/auctions/$id'
      path: '/auctions/$id'
      fullPath: '/auctions/$id'
      preLoaderRoute: typeof AuctionsIdImport
      parentRoute: typeof rootRoute
    }
    '/auctions/': {
      id: '/auctions/'
      path: '/auctions'
      fullPath: '/auctions'
      preLoaderRoute: typeof AuctionsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuctionsIdRoute,
  AuctionsIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auctions/$id",
        "/auctions/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auctions/$id": {
      "filePath": "auctions/$id.tsx"
    },
    "/auctions/": {
      "filePath": "auctions/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

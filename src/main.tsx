// import { Layout } from './layout/LayoutPage/Layout';
// import { Error } from './pages/Error/Error';
// import { TitlePage } from './pages/TitlePage/TitlePage';
// import { AuctionCars } from './pages/AuctionCars/AuctionCars';
// import { DetailedMachine } from './pages/DetailedMachine/DetailedMachine';
// import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
// import { PREFIX } from './helpers/API';
// import React, { Suspense, lazy } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// const DetailedMachine = lazy(
//   () => import('./pages/DetailedMachine/DetailedMachine')
// );

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const router = createRouter({ routeTree });

// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <TitlePage />
//       },
//       {
//         path: '/auctions',
//         element: <AuctionCars />
//       },
//       {
//         path: '/lot/:id',
//         element: (
//           <Suspense>
//             <DetailedMachine />
//           </Suspense>
//         ),
//         errorElement: <>!!!ERORR!!!</>,
//         loader: async ({ params }) => {
//           return defer({
//             data: new Promise((resolve, reject) => {
//               axios
//                 .get(`${PREFIX}/${params.id}`)
//                 .then((data) => resolve(data))
//                 .catch((e) => reject(e));
//             })
//           });
//         }
//       }
//     ]
//   },
//   {
//     path: '*',
//     element: <Error />
//   }
// ]);

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

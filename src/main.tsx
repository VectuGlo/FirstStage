import { Layout } from './layout/LayoutPage/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '*',
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

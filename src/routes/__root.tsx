import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header/Header';
import SectionFooter from '../components/SectionFooter/SectionFooter';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <SectionFooter />
      <TanStackRouterDevtools />
    </>
  )
});

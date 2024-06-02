import Header from '../../components/Header/Header';
import SectionFooter from '../../components/SectionFooter/SectionFooter';

export function Layout() {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <SectionFooter />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

export function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

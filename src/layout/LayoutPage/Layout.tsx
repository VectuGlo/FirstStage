import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Advantages from '../../components/Advantages/Advantages';

export function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

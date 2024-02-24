import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Advantages from '../../components/Advantages/Advantages';
import Maps from '../../components/Maps/Maps';

export function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Maps />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

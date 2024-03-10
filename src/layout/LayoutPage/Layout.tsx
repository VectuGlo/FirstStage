import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Advantages from '../../components/Advantages/Advantages';
import SectionMaps from '../../components/SectionMaps/SectionMaps';

export function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <SectionMaps />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

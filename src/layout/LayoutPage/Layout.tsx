import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';
import SectionHero from '../../components/SectionHero/SectionHero';
import SectionAdvantages from '../../components/SectionAdvantages/SectionAdvantages';
import SectionMaps from '../../components/SectionMaps/SectionMaps';

export function Layout() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionAdvantages />
      <SectionMaps />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
}

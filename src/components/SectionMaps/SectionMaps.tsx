import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMaps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import SectionMapsContent from '../SectionMapsContent/SectionMapsContent';

function SectionMaps() {
  return (
    <>
      <section
        className={cn(stylesBootstrap['col-12'], styles['section-maps'])}
      >
        <div className={cn(stylesBootstrap['container-fluid'])}>
          <h2 className={cn(styles['map-h2'], stylesBootstrap['text-center'])}>
            Наши Офисы
          </h2>
          <div className={cn(styles['advantages'])}>
            <SectionMapsContent />
          </div>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default SectionMaps;

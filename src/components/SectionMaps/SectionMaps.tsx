import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './SectionMaps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import YandexMaps from '../YandexMaps/YandexMaps';

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
            <div className={stylesBootstrap['col-6']}>
              <YandexMaps />
            </div>
            <div
              className={cn(stylesBootstrap['col-6'], styles['ofice-content'])}
            >
              <h4>Офис во Владивостоке</h4>
            </div>
          </div>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default SectionMaps;

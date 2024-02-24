import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Maps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';

function Maps() {
  return (
    <>
      <section className={(stylesBootstrap['col-12'], styles['section-maps'])}>
        <div
          className={cn(
            stylesBootstrap['container-fluid'],
            styles['advantages']
          )}
        >
          <h2 className={cn(styles['map-h2'], stylesBootstrap['text-center'])}>
            Наши Офисы
          </h2>
          <YMaps>
            <Map
              defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: ['zoomControl', 'fullscreenControl'],
              }}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
              <Placemark defaultGeometry={[55.75, 37.57]} />
            </Map>
          </YMaps>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default Maps;

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.module.css';
import styles from './Maps.module.css';
import cn from 'classnames';
import Separator from '../Separator/Separator';
import MapsBalloon from '../MapsBalloon/MapsBalloon';

function Maps() {
  return (
    <>
      <section
        className={cn(stylesBootstrap['col-12'], styles['section-maps'])}
      >
        <div
          className={cn(
            stylesBootstrap['container-fluid'],
            styles['advantages']
          )}
        >
          <h2 className={cn(styles['map-h2'], stylesBootstrap['text-center'])}>
            Наши Офисы
          </h2>
          <YMaps
            query={{
              ns: 'use-load-option',
              load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
              apikey: 'be607c15-6300-4ad2-b5f5-ae4cc2dbe5e4',
              lang: 'ru_RU',
            }}
          >
            <Map
              defaultState={{
                center: [43.14026428035671, 131.91669773854233],
                zoom: 13,
                controls: ['zoomControl', 'fullscreenControl'],
              }}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
              width="500px"
              height="400px"
            >
              <Placemark
                defaultOptions={{
                  iconLayout: 'default#image',
                  iconImageHref: 'favicon.ico',
                  iconImageSize: [32, 32],
                  iconImageOffset: [-32, -25],
                }}
                geometry={[43.14026428035671, 131.91669773854233]}
                properties={{
                  balloonContentHeader: 'Азия Сейлс Авто',
                  balloonContentBody:
                    'Приморский край, Владивосток, Камская улица, 5Б',
                  balloonContentFooter: `
                    <h3>ААААА</h3>
                  `,
                }}
              />
            </Map>
          </YMaps>
        </div>
      </section>
      <Separator apperance="dark" />
    </>
  );
}

export default Maps;

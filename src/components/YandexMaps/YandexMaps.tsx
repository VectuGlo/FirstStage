import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './YandexMaps.css';

function YandexMaps() {
  const pointCenter = [43.14026428035671, 131.91669773854233];

  return (
    <YMaps
      query={{
        apikey: 'be607c15-6300-4ad2-b5f5-ae4cc2dbe5e4',
      }}
    >
      <Map
        state={{
          center: pointCenter,
          zoom: 13,
          controls: [
            'trafficControl',
            'typeSelector',
            'zoomControl',
            'fullscreenControl',
          ],
        }}
        modules={[
          'control.TrafficControl',
          'control.TypeSelector',
          'control.ZoomControl',
          'control.FullscreenControl',
          'geoObject.addon.hint',
        ]}
        width="100%"
        height="400px"
      >
        <Placemark
          defaultOptions={{
            iconLayout: 'default#image',
            iconImageHref: 'favicon.ico',
            iconImageSize: [32, 32],
            iconImageOffset: [-32, -25],
          }}
          geometry={pointCenter}
          properties={{
            hintContent: `<div id="hintContent1">
              <b>Asia Sales Auto</b>
              <span>город Владивосток, улица Камская 5Б</span>

            </div>
            `,
          }}
        />
      </Map>
    </YMaps>
  );
}

export default YandexMaps;

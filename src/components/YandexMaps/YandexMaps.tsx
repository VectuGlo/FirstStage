import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { YandexMapsProps } from './YandexMaps.props';
import './YandexMaps.css';

function YandexMaps({
  placeMarkPos,
  textAddress1,
  textAddress2,
}: YandexMapsProps) {
  const dispMark = (text1 = textAddress1, text2 = textAddress2) => {
    return (
      <Placemark
        defaultOptions={{
          iconLayout: 'default#image',
          iconImageHref: 'map.ico',
          iconImageSize: [32, 32],
          iconImageOffset: [-32, -25],
        }}
        geometry={placeMarkPos}
        properties={{
          hintContent: `<div id="hintContent1">
                        <b>Asia <span id='span-red1'>Sales</span> Auto</b>
                        <span>${text1}</span>
                        <span>${text2}</span>
                      </div>
                      `,
        }}
      />
    );
  };

  return (
    <YMaps
      query={{
        apikey: 'be607c15-6300-4ad2-b5f5-ae4cc2dbe5e4',
      }}
    >
      <Map
        state={{
          center: placeMarkPos,
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
        width="90%"
        height="400px"
      >
        {dispMark()}
      </Map>
    </YMaps>
  );
}

export default YandexMaps;

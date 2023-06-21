import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { YandexMapProps } from '../../types/features';

const YandexMap: React.FC<YandexMapProps> = ({ geo = [55.754200, 37.621122] }) => {
  try {
    return (
      <YMaps>
        <div>
          <Map defaultState={{ center: geo, zoom: 9 }} width='100%'>
            <Placemark defaultGeometry={geo} />
          </Map>
        </div>
      </YMaps>
    );
  } catch (error) {
    return (
      <div>Карта временно недоступна</div>
    );
  }
};

export default YandexMap;

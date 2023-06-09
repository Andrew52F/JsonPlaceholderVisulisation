import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = ({ geo = [55.754200, 37.621122] }) => {
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

YandexMap.propTypes = {
  geo: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default YandexMap;

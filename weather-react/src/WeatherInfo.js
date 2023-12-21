import React from 'react';
import Clouds from './images/clouds.png';
import Humidity from './images/humidity.png';
import Wind from './images/wind.png';

const WeatherInfo = ({ data, error }) => {
  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className='WeatherInfo'>
          <img src={Clouds} alt='Clouds' />
          <p>{data.main.temp}</p>
          <p>{data.name}</p>
          <div className='Humidity-Wind'>
            <img src={Humidity} alt='Humidity' />
            <div className='Humidity_details'>
              <p>%</p>
              <p>Humidity</p>
            </div>
            <img src={Wind} alt='Wind' />
            <div className='Wind_details'>
              <p>2 km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;

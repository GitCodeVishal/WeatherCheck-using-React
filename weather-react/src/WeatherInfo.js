import React from 'react';
import Humidity from './images/humidity.png';
import Wind from './images/wind.png';
import Clouds from './images/clouds.png';
import Clear from './images/clear.png';
import Drizzle from './images/drizzle.png';
import Mist from './images/mist.png';
import Rain from './images/rain.png';
import Snow from './images/snow.png';

const WeatherInfo = ({ data, error }) => {

    const weatherCondition = data?.weather[0]?.main.toLowerCase();

    const weatherIcons = {
        clouds: Clouds,
        clear: Clear,
        drizzle: Drizzle,
        mist: Mist,
        rain: Rain,
        snow: Snow
    }

  return (
    <>
      {error && <p className='error'>{error}</p>}
      {!error && (
        <div className='WeatherInfo'>
           <img src={weatherIcons.weatherCondition} alt={weatherCondition} />
          <p>{data.main.temp}</p>
          <p>{data.name}</p>
           <div className='Humidity-Wind'>
            <img src={Humidity} alt='Humidity' />
            <div className='Humidity_details'>
              <p>{`${data.main.humidity}%`}</p>
              <p>Humidity</p>
            </div>
            <img src={Wind} alt='Wind' />
            <div className='Wind_details'>
              <p>{`${data.wind.speed} km/h`}</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;

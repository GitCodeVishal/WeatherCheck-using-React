import React from 'react'
import Clouds from './images/clouds.png'
import Humidity from './images/humidity.png'
import Wind from './images/wind.png'


const WeatherInfo = () => {
  return (
    <div className='WeatherInfo' >
        <img src={Clouds}/>
        <p>12°c</p>
        <p>Delhi</p>
        <div className='Humidity-Wind' >
            <img src={Humidity}/>
            <div className='Humidity_details'>
                <p>94%</p>
                <p>Humidity</p>
            </div>
            <img src={Wind}/>
            <div className='Wind_details'>
                <p>2 km/h</p>
                <p>Wind</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo
import React from 'react'
import humidityimg from '../assets/humidity.png'
import windimg from '../assets/wind.png'

const WeatherData = ({weather}) => {
  return (
    <div className='flex justify-between items-center mt-2 p-2 lg:mt-4 lg:p-4'>
        <div className='flex justify-center items-center'>
            <img src={humidityimg} alt="Humidity" className='w-8 h-8' />
            <div className='ml-2'>
                <p className='text-white'>Humidity</p>
                <p className='text-white'>{weather?.main?.humidity}%</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={windimg} alt="Wind Speed" className='w-8 h-8' />
            <div className='ml-2'>
                <p className='text-white'>Wind Speed</p>
                <p className='text-white'>{Math.round(weather?.wind?.speed)} km/hr</p> 
            </div>
        </div>
    </div>
  )
}

export default WeatherData
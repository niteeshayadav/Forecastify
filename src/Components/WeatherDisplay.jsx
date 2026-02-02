import React from 'react'
import clearimg from '../assets/clear.png'
import cloudimg from '../assets/cloud.png'
import drizzleimg from '../assets/drizzle.png'
import fogimg from '../assets/fog.png'
import rainimg from '../assets/rain.png'
import snowimg from '../assets/snow.png'
import thunderstormimg from '../assets/thunderstrom.jpg'
import hazeimg from '../assets/haze.png'

const WeatherDisplay = ({weather}) => {
  const icons = {
    Clear: clearimg,
    Clouds: cloudimg,
    Drizzle: drizzleimg,
    Fog: fogimg,
    Smoke: fogimg,
    Mist: fogimg,
    Rain: rainimg,
    Haze: hazeimg,
    Snow: snowimg,
    Thunderstorm: thunderstormimg
  }
  const condition = weather?.weather[0]?.main;
  const weatherIcon = icons[condition] || clearimg;
  
  return (
    <div className='flex flex-col justify-center items-center'>
       <img src={weatherIcon} alt={condition || "Clear Weather" } className='w-1/2 h-auto' />
       <div className='flex flex-col justify-center items-center mt-4'>
        <p className='text-4xl sm:text-5xl lg:text-6xl mb-2 text-white'>{Math.round(weather?.main?.temp)}°C</p>
        <p className='text-white text-4xl my-2'>{condition}</p>
        <p className='text-4xl text-white'>{weather?.name}</p>
       </div>
    </div>
  )
}

export default WeatherDisplay
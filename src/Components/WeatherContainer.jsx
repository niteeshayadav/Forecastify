import React, { use, useEffect, useState } from 'react'
import Search from './Search'
import WeatherDisplay from './WeatherDisplay'
import WeatherData from './WeatherData'
import axios from 'axios'
const WeatherContainer = () => {
  const [weather, setWeather] = useState(null);

  const searchCity = async(city) => {
      try{
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
        const response = await axios.get(URL);
        console.log(response.data);
        
        setWeather(response.data);
      }
      catch(error){
        console.log("Error fetching weather data:", error);
      }
  }
  useEffect(() => {
    searchCity("London");
  },[]);

  return (
    <div className='w-[90%] sm:w-[50%] md:w-[40%] h-auto lg:w-[25%] bg-linear-to-br from-[#0f63ba] to-[#1c80db] rounded-xl shadow-lg p-4'>
      <Search city={searchCity} />
      <WeatherDisplay weather={weather} />
      <WeatherData weather={weather} /> 
    </div>
  )
}

export default WeatherContainer
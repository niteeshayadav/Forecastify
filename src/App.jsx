import React from 'react'
import './index.css'
import WeatherContainer from './Components/WeatherContainer'
const App = () => {
  return (
    <div className='app flex justify-center items-center h-screen w-screen bg-[#bedbf9]'>
      <WeatherContainer />
    </div>
  )
}

export default App
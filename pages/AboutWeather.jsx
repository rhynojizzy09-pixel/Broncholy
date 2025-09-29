import React, { useEffect, useState } from 'react'


export default function AboutWeather() {
  const [weather, setWeather] = useState(null)
  const [city, setcity] = useState('')
  const APIkey = 'fedfd3df48c36146308f087278fcc9b1'
   const handleSubmit = async() => {
     try {
        const res  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        const data = await res.json()
        setWeather(data)
        console.log(data);
        
      
     } catch (error) {
      console.log(error);
      
     }
   }



  

    

 
  
  return (
    <div className=' bg-[#f0f2f5] flex justify-center items-start shadow-lg  h-[150vh] m-0 pt-[50px] box-border'>
      
      <div className='bg-lime-500 rounded-[15px] shadow-lg p-[30px] w-[90%] max-w-[600px] text-center'>
               
               <div className='mb-[30px]  '>
                <h1 className='text-[40px] text-[#333] mb-[25px] font-bold'>Breeze</h1>
                <div className='mb-[15px] flex justify-center gap-[10px] italic'>
                   <input type="text" placeholder='What city are you in?' className='border-solid border border-amber-300 rounded-[8px] text-[16px] outline-0 w-[70%] ' onChange={(e) =>setcity(e.target.value)} value={city} /> 
                  <button className='border-0 w-[20%] rounded-[4px] text-[16px] cursor-pointer text-white py-[12px] px-[20px]  bg-[#7e57c2] transition-all duration-300 hover:bg-[#673ab7]' onClick={handleSubmit}>Search</button>
                </div>
               </div>
          
        
            {
              weather && weather.main && ( 
              <div className='mt-[30px] pt-[30px] border-t border-[#eee] border-solid shadow-sm h-[450px] italic'>
                  <div className='flex'>
                  <h2 className='text-[32px] font-bold mb-[10px] text-emerald-700 '> {weather.name} <span  className='text-[18px] text-[#777] font-normal italic'>TimeZone:{weather.timezone}m</span></h2>
                   <p>{weather.weather[0].icon && <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather Icon" className='w-[70px] h-[70px]' />}</p>
                <p>{weather.weather[0].icon && <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather Icon" className='w-[100px] h-[100px]' />}</p>
                  </div>
                   <div className='flex justify-center items-center gap-[20px] mb-[20px]'>
                  <p className='text-[64px]  font-bold text-orange-400'> {weather.main.temp}°C</p>
                <p className='text-[24px] text-amber-200 '> {weather.weather[0].description}</p>
                </div>

                  <div className=' bg-gradient-to-r from-[#e0f7fa] to-[#80deea] rounded-[10px] bg-[#fff]  text-center flex flex-wrap gap-[20px] mx-[10px]  '>
                      <p className='text-[29px] text-[#888888f3] shadow-sm w-[30%] h-[100px] bg- '>Humidity: {weather.main.humidity}%</p>
                      <p className='text-[28px] text-[#888] shadow-sm w-[30%] h-[100px]'>WindSpeed: {weather.wind.speed}m/s</p>
                     <p className='text-[29px] text-[#888] shadow-sm w-[30%] h-[100px]'>Longitude: {weather.coord.lon}</p>
                    <p className='text-[29px] text-[#888] shadow-sm w-[30%] h-[100px]'>Latitude: {weather.coord.lat}</p>
                    <p className='text-[29px] text-[#888] shadow-sm w-[30%] h-[100px]'>Pressure: {weather.main.pressure}</p>
                   <p className='text-[25px] text-[#888] shadow-sm w-[30%] h-[100px]'>CountryCode: {weather.sys.country}</p>
                  
                </div>
              
              </div> 
        )
            }
        
      </div>
    </div>
  )
}

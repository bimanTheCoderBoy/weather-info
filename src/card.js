import React,{useEffect, useState} from 'react'

const Card = (props) => {
    const e=props.prop;
 const [weatherIcon,setWeatherIcon]=useState(e.weatherCon)

 useEffect(()=>{
    if(e.weatherCon)
    {
        switch (e.weatherCon) {
            case 'Haze':
                setWeatherIcon("wi-fog")
                break;
            case 'Clouds':
                setWeatherIcon("wi-day-cloudy")
                break;
            case 'Clear':
                setWeatherIcon("wi-day-sunny")
                break;
            default:
                setWeatherIcon("wi-day-sunny")
                break;
        }
    }
 })
   
  return (
    <>
      <div className="widget">
                    <div className="weatherIcon">
                        <i className={`wi ${weatherIcon}`}></i>
                    </div>
                    <div className="weatherInfo">
                
                        <div className="temperature">
                            <span>{e.temp}&deg;C</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">{e.weatherCon}</div>
                            <div className="place">{e.cityName}, {e.country}</div>
                        </div>

                    </div>
                    <div className="date">{new Date().toLocaleString()}</div>
                    {/* four col section */}
                    <div className="extra-temp">
                        <div className="weather-extra-info">

                            <div className="two-sided-section">
                                <p><i className='wi wi-sunset'></i></p>
                                <p className="extra-info-leftside">
                                    {e.sunset} <br />
                                    Sunset
                                </p>
                            </div>


                            <div className="two-sided-section">
                                <p><i className='wi wi-humidity'></i></p>
                                <p className="extra-info-leftside">
                                    {e.humidity} <br />
                                    Humidity
                                </p>
                            </div>

                        </div>
                        <div className="weather-extra-info">

                            <div className="two-sided-section">
                                <p><i className='wi wi-rain'></i></p>
                                <p className="extra-info-leftside">
                                    {e.pressure} <br />
                                    Pressure
                                </p>
                            </div>



                            <div className="two-sided-section">
                                <p><i className='wi wi-strong-wind'></i></p>
                                <p className="extra-info-leftside">
                                    {e.wind} <br />
                                    Speed
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default Card

import React from 'react'
import { useState } from 'react'
import icon from './icon.png'
import Card from './Card.jsx'

export default function Navbar(props) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [inputText,setInputText]=useState('')
    const [name, setName] = useState('--')
    const [region, setRegion] = useState('- - ')
    const [country,setCountry]=useState(' - -')
    const [img, setImg] = useState()
    const [temp, setTemp] = useState('--')
    const [text, setText] = useState('-')
    const [humidity, setHumidity] = useState('-')
    const [precip, setPrecip] = useState('-')
    const [clouds, setClouds] = useState('-')
    const [chances, setChance] = useState('-')
    const [speed, setSpeed] = useState('-')
    const [pressure,setPressure]=useState('-')
    const [windChill,setWindchill]=useState('-')

    const onChangeFn= async(inputText)=>{
        setInputText(inputText.target.value)
    }

    const weatherForecast = async (inputText) => {
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputText}&aqi=no`;
        let data = await fetch(url);
        let collectedData = await data.json();
        setName(collectedData.location.name)
        setRegion(collectedData.location.region)
        setCountry(collectedData.location.country)
        setImg(collectedData.current.condition.icon)
        setTemp(collectedData.current.temp_c)
        setText(collectedData.current.condition.text)
        setHumidity(collectedData.current.humidity)
        setPrecip(collectedData.current.precip_mm)
        setClouds(collectedData.current.cloud)
        setChance(collectedData.current.chance_of_rain)
        setSpeed(collectedData.current.wind_kph)
        setPressure(collectedData.current.pressure_mb)
        setWindchill(collectedData.current.windchill_c)
    }
    

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: 'rgba(0, 0, 0, 0.66)', height: '60px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: 'white', display: 'flex', gap: '20px' }} href="#">
                        <div style={{ fontSize: '20px', marginLeft: '15px' }}>The ForecastView</div>
                    </a>
                    <style>{`
                        .white-placeholder::placeholder {
                            color: rgba(255, 255, 255, 0.75) !important;
                            opacity: 1;
                        }
                    `}</style>
                    <form className="d-flex" role="search" style={{ marginTop: '-1px' }}>
                        <input className="form-control me-2 white-placeholder" onChange={onChangeFn} value={inputText} type="search" placeholder="City" aria-label="Search" style={{ backgroundColor: 'rgba(0, 0, 0, 0.49)', color: 'white', border: 'none', width: '300px', borderRadius: '30px' }} />
                        <button className="btn btn-outline-light" onClick={()=>weatherForecast(inputText)} type="submit" style={{ borderRadius: '100px', width: '40px', height: '40px', border: 'none', backgroundColor: 'rgba(0, 0, 0, 0.49)' }}><svg style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></button>
                    </form>

                </div>
            </nav>
            <Card name={name} region={region} country={country} img={img} temperature={temp + '°C'} text={text} humidity={humidity} precip={precip} clouds={clouds} chances={chances} speed={speed} pressure={pressure} windChill={windChill+'°C'} />
        </>
    )
}

import React from 'react'
import icon from './icon.png'

export default function Card(props) {
  return (
    <div>
      <div style={{backgroundColor:'rgba(0, 0, 0, 0.65)',height:'100vh',width:'100vw',position:'fixed'}}>
       <div className="container" style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'white',position:'relative',marginTop:'40px'}} >
        <div className="container">
            <h1 style={{textAlign:'center'}}>{props.name}</h1>
            <h5 style={{textAlign:'center',marginTop:'-9px'}}>{props.region} , {props.country}</h5>
            <img src={props.img} width="300px" style={{marginLeft:'490px',marginTop:'-15px'}}/>
            <h2 style={{textAlign:'center',marginTop:'-0px'}}>{props.temperature}</h2>
            <h5 style={{textAlign:'center'}}>{props.text}</h5>
        </div>
        <div style={{display:'flex',marginLeft:'240px',gap:'250px',marginTop:'60px'}}>
            <div style={{textAlign:'center'}}>
                <h5>Humidity</h5>
                <h2>{props.humidity}</h2>
            </div>
            <div style={{textAlign:'center'}}>
                <h5>Precipitation</h5>
                <h6>{props.precip} mm</h6>
                <p>Cloudy: {props.clouds}% <br />Chances: {props.chances}%</p>
                <p></p>
            </div>
            <div style={{textAlign:'center'}}>
                <h5>Wind</h5>
                <h6>{props.speed} kmph</h6>
                <p>Pressure: {props.pressure} mb <br />Wind Chill: {props.windChill}</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}
